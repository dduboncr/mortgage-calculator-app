module.exports = {
  logHeapUsage: true,
  bail: false,
  coverageReporters: ['json', 'html', 'text', 'text-summary'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  forceExit: true,

  bail: true,
  errorOnDeprecated: true,
  logHeapUsage: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/?(*.)+(test).[jt]s'],
  verbose: false,
};
