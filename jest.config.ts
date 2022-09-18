import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {},
  testPathIgnorePatterns: ['/e2e/'],
};
export default config;
