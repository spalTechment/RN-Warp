module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'json-summary'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^.+/screens/LoginScreen$': '<rootDir>/__mocks__/DummyComponent.tsx',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-gesture-handler|react-native-reanimated|react-native-screens|react-native-safe-area-context|react-native-drawer-layout)/)'
  ],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
};
