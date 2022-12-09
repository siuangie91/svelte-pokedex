import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': [
      'svelte-jester', { preprocess: true, },
    ],
  },
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testPathIgnorePatterns: ['/e2e/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
export default config;
