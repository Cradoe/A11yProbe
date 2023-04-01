import pa11y from "pa11y";
import axios from "axios";
import { getSubPages } from "../../web-scraping";
import { Issue } from "../interfaces";
import { config } from "../../config";
import cliProgress from "cli-progress";

export async function runAccessibilityCheck(): Promise<Issue[]> {
  const configFile = await config();
  let rootUrl: string = configFile.url;

  try {
    const response = await axios.get(rootUrl);
    rootUrl = response.request.res.responseUrl;
  } catch (error) {
    console.error(`Failed to fetch root URL: ${error}`);
    return;
  }

  const pages: string[] = await getSubPages(rootUrl);
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );

  const MAX_CONCURRENT_REQUESTS: number = 5;
  const issues: Issue[] = [];
  const cache = new Map<string, Issue[]>();
  let completedPages = 0;

  // start the progress bar with a custom message
  progressBar.start(100, 0, { text: "Running accessibility checks..." });

  // Process requests in batches of MAX_CONCURRENT_REQUESTS
  for (let i = 0; i < pages.length; i += MAX_CONCURRENT_REQUESTS) {
    const batch: string[] = pages.slice(i, i + MAX_CONCURRENT_REQUESTS);
    // @ts-ignore
    const pa11yPromises: Promise<Issue[] | undefined>[] = batch.map(
      async (page) => {
        try {
          if (cache.has(page)) {
            // Use cached result if available
            return cache.get(page);
          } else {
            const result = await pa11y(rootUrl + page);
            if (result.issues.length > 0) {
              result.issues.forEach((issue: any) => {
                issue.page = page;
              });
              cache.set(page, result.issues as unknown as Issue[]);
              return result.issues;
            } else {
              // Store empty array in cache to avoid making same request again
              cache.set(page, []);
            }
          }
        } catch (error) {
          console.error(
            `Failed to run accessibility check for ${page}: ${error}`
          );
        } finally {
          completedPages++;
          const progress = Math.floor((completedPages / pages?.length) * 100);
          progressBar.update(progress, {
            text: `Running accessibility checks (${progress}% complete)...`,
          });
        }
      }
    );

    const results = await Promise.allSettled(pa11yPromises);
    for (const result of results) {
      if (result.status === "fulfilled") {
        issues.push(...(result.value ?? []));
      }
    }
  }

  // stop the progress bar
  progressBar.stop();
  return issues;
}
