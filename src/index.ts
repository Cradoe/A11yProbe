#!/usr/bin/env node
import axios from "axios";
import { config } from "./config";
import { getSubPages } from "./web-scraping";
import { runAccessibilityCheck } from "./accessibility-check";
import { ROOT_CONFIGURATION_FILE_NAME } from "./config/constant";

(async () => {
  const configFile = await config();
  let rootUrl: string = configFile?.url;

  try {
    const response = await axios.get(rootUrl as string);
    rootUrl = response.request.res.responseUrl;
  } catch (error) {
    console.error(`Failed to fetch root URL: ${error}`);
    return;
  }

  const pages: string[] = await getSubPages(rootUrl);

  if (pages.length === 0) {
    console.log(
      `No pages found or the pages are not accessible. Kindly check your URL in ${ROOT_CONFIGURATION_FILE_NAME} file.`
    );
    return;
  }

  const issues = await runAccessibilityCheck(pages);

  console.log(issues);
  console.log(`Total issues found: ${issues?.length}`);
  console.log("Total pages scanned: ", pages?.length);
})();
