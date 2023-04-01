import { runAccessibilityCheck } from "./accessibility-check";

(async () => {
  const issues = await runAccessibilityCheck();

  console.clear();
  console.log(issues);
  console.log(`Total issues found: ${issues.length}`);
})();
