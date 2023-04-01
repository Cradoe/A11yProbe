import { promises as fs } from "fs";
import { ROOT_CONFIGURATION_FILE_NAME } from "./constant";
import { Config } from "./interfaces";

export const config = async (): Promise<Config> => {
  try {
    const configFile = await JSON.parse(
      await fs.readFile(ROOT_CONFIGURATION_FILE_NAME, "utf-8")
    );

    // check if configFile is undefined or empty object
    if (
      Object.keys(configFile).length === 0 &&
      configFile.constructor === Object
    ) {
      throw new Error(
        `You need to create a ${ROOT_CONFIGURATION_FILE_NAME} file in the root directory of your project.`
      );
    }

    if (configFile.url === undefined) {
      throw new Error(
        `You need to specify the URL of your application in ${ROOT_CONFIGURATION_FILE_NAME} file in the root directory of your project.`
      );
    }
    return {
      url: configFile.url,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
