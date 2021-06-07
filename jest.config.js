module.exports = {
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules/(?!decoder/.*)'],
  testPathIgnorePatterns: ['deps/', 'out/'],
  // testPathIgnorePatterns: ['deps/', './*/*.spec.i.*'],
  testMatch: ['./**/*.spec.*'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
};