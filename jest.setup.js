import 'react-native-gesture-handler/jestSetup';

// Mock Reanimated
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Mock NativeEventEmitter to prevent requiring native modules
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

