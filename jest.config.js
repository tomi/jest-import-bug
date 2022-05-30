module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test", "<rootDir>/src"],
  testMatch: ["**/*.test.js"],
  // Quick fix for the bug, a custom resolver:
  // resolver: "<rootDir>/resolver.js",
};
