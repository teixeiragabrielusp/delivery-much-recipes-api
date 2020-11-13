module.exports = {

  // Stop running tests after `n` failures
  bail: 1,


  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.test.js",
  ],

  //Test timeout
  testTimeout: 30000
};