import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json"));

packageJson.type = "commonjs";

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
