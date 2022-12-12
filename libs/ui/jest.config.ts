import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default config;
