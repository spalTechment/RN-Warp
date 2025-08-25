# React Native Testing Rules Documentation

## 📋 Overview

This directory contains comprehensive testing rules and standards for React Native TypeScript projects using Cursor AI. These rules ensure high-quality, maintainable, and reliable test coverage across your React Native applications.

## 🏗️ Testing Architecture

The testing rules are organized into logical categories:

```
.cursor/rules/test/
├── README.md                    # This documentation
├── unit-testing.mdc            # Unit testing standards
└── ui-testing.mdc              # UI/E2E testing standards
```

## 🚀 Quick Start

### For New Developers
1. **Read this README** to understand the testing structure
2. **Review unit testing rules** in `unit-testing.mdc`
3. **Check UI testing rules** in `ui-testing.mdc`
4. **Set up testing environment** with required dependencies
5. **Start with unit tests** for components and utilities

### For Existing Projects
1. **Audit current tests** against these rules
2. **Implement missing test patterns** gradually
3. **Add E2E tests** for critical user journeys
4. **Improve test coverage** to meet standards

## 📚 Testing Categories

### 🧪 Unit Testing (`unit-testing.mdc`)
**Priority: HIGH** | **Always Apply: False** | **Apply When: Creating components, functions, hooks**

Comprehensive unit testing standards covering:
- **Component Testing** with React Native Testing Library
- **Hook Testing** with renderHook
- **API/Service Testing** with proper mocking
- **Utility Function Testing** with edge cases
- **Error Testing** and error boundaries
- **Performance Testing** for critical components

**Key Features:**
- Jest and React Native Testing Library integration
- AAA pattern (Arrange, Act, Assert)
- Comprehensive mocking strategies
- High test coverage requirements
- TypeScript support throughout

**Target Files:**
```yaml
- "**/*.test.ts"
- "**/*.test.tsx"
- "**/components/**/*.tsx"
- "**/hooks/**/*.ts"
- "**/services/**/*.ts"
- "**/utils/**/*.ts"
```

### 🎨 UI Testing (`ui-testing.mdc`)
**Priority: HIGH** | **Always Apply: False** | **Apply When: Creating screens, user flows, accessibility features**

Comprehensive UI testing standards covering:
- **E2E Testing** with Detox
- **Component Integration Testing**
- **Accessibility Testing** and screen reader support
- **Visual Regression Testing** with snapshots
- **Cross-Platform Testing** (iOS/Android)
- **Performance Testing** for UI components

**Key Features:**
- Detox E2E testing framework
- Complete user journey testing
- Accessibility compliance testing
- Visual regression testing
- Cross-platform compatibility

**Target Files:**
```yaml
- "**/e2e/**/*.ts"
- "**/*.e2e.ts"
- "**/integration/**/*.ts"
- "**/*.accessibility.test.tsx"
- "**/*.visual.test.tsx"
```

## 🛠️ Testing Setup

### Required Dependencies

#### Unit Testing
```json
{
  "devDependencies": {
    "@testing-library/react-native": "^12.0.0",
    "@testing-library/jest-native": "^5.0.0",
    "@types/jest": "^29.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0"
  }
}
```

#### UI Testing
```json
{
  "devDependencies": {
    "detox": "^20.0.0",
    "@types/detox": "^20.0.0",
    "detox-cli": "^20.0.0"
  }
}
```

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{ts,tsx}',
    '!src/__tests__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### Detox Configuration
```javascript
// .detoxrc.js
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  configurations: {
    'ios.sim.debug': {
      type: 'ios.simulator',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/AVO.app',
      build: 'xcodebuild -workspace ios/AVO.xcworkspace -scheme AVO -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      device: {
        type: 'iPhone 14',
        os: 'iOS 16.0',
      },
    },
    'android.emu.debug': {
      type: 'android.emulator',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      device: {
        avdName: 'Pixel_4_API_30',
      },
    },
  },
};
```

## 📁 Test Organization

### File Structure
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx          # Unit tests
│   │   ├── Button.integration.test.tsx  # Integration tests
│   │   └── index.ts
│   └── __tests__/
│       └── components.test.ts
├── screens/
│   ├── HomeScreen/
│   │   ├── HomeScreen.tsx
│   │   ├── HomeScreen.test.tsx      # Unit tests
│   │   ├── HomeScreen.integration.test.tsx  # Integration tests
│   │   └── index.ts
│   └── __tests__/
│       └── screens.test.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useAuth.test.ts              # Unit tests
│   └── __tests__/
│       └── hooks.test.ts
├── services/
│   ├── PetService.ts
│   ├── PetService.test.ts           # Unit tests
│   └── __tests__/
│       └── services.test.ts
├── utils/
│   ├── formatters.ts
│   ├── formatters.test.ts           # Unit tests
│   └── __tests__/
│       └── utils.test.ts
├── __tests__/
│   ├── setup.ts
│   ├── mocks/
│   │   ├── apiClient.ts
│   │   ├── react-native-keychain.ts
│   │   └── react-native-async-storage.ts
│   ├── utils/
│   │   ├── test-utils.ts
│   │   └── render-with-providers.ts
│   └── factories/
│       ├── petFactory.ts
│       └── userFactory.ts
└── e2e/
    ├── flows/
    │   ├── authentication.e2e.ts
    │   ├── pet-management.e2e.ts
    │   └── user-profile.e2e.ts
    ├── utils/
    │   ├── testUtils.ts
    │   └── navigationUtils.ts
    └── factories/
        └── uiTestData.ts
```

### Naming Conventions
- **Unit test files**: `ComponentName.test.tsx` or `ComponentName.spec.tsx`
- **Integration test files**: `ComponentName.integration.test.tsx`
- **E2E test files**: `flow-name.e2e.ts`
- **Accessibility test files**: `ComponentName.accessibility.test.tsx`
- **Visual test files**: `ComponentName.visual.test.tsx`

## 🧪 Unit Testing Examples

### Component Testing
```typescript
// ✅ CORRECT: Complete component test
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button', () => {
  const mockOnPress = jest.fn();
  const defaultProps = {
    title: 'Test Button',
    onPress: mockOnPress,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with correct title', () => {
    // Arrange
    render(<Button {...defaultProps} />);
    
    // Act
    const button = screen.getByText('Test Button');
    
    // Assert
    expect(button).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    // Arrange
    render(<Button {...defaultProps} />);
    
    // Act
    const button = screen.getByText('Test Button');
    fireEvent.press(button);
    
    // Assert
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
```

### Hook Testing
```typescript
// ✅ CORRECT: Hook testing
import { renderHook, act } from '@testing-library/react-native';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('should increment count', () => {
    // Arrange
    const { result } = renderHook(() => useCounter());
    
    // Act
    act(() => {
      result.current.increment();
    });
    
    // Assert
    expect(result.current.count).toBe(1);
  });
});
```

### API Testing
```typescript
// ✅ CORRECT: API service testing
import { PetService } from '../PetService';
import { mockApiClient } from '../__mocks__/apiClient';

jest.mock('../apiClient');

describe('PetService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch pets successfully', async () => {
    // Arrange
    const mockPets = [
      { id: '1', name: 'Fluffy', type: 'cat' },
      { id: '2', name: 'Rex', type: 'dog' },
    ];
    mockApiClient.get.mockResolvedValue({ data: mockPets });

    // Act
    const result = await PetService.getPets();

    // Assert
    expect(result).toEqual(mockPets);
    expect(mockApiClient.get).toHaveBeenCalledWith('/pets');
  });
});
```

## 🎨 UI Testing Examples

### E2E Testing
```typescript
// ✅ CORRECT: Complete E2E test
import { device, element, by, expect } from 'detox';

describe('Authentication Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should complete login flow successfully', async () => {
    // Navigate to login screen
    await element(by.id('login-button')).tap();
    
    // Fill login form
    await element(by.id('email-input')).typeText('test@example.com');
    await element(by.id('password-input')).typeText('password123');
    
    // Submit form
    await element(by.id('submit-button')).tap();
    
    // Verify successful login
    await expect(element(by.id('home-screen'))).toBeVisible();
    await expect(element(by.text('Welcome, Test User'))).toBeVisible();
  });
});
```

### Integration Testing
```typescript
// ✅ CORRECT: Screen integration test
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../HomeScreen';
import { PetService } from '../../services/PetService';

jest.mock('../../services/PetService');

describe('HomeScreen Integration', () => {
  const mockPets = [
    { id: '1', name: 'Fluffy', type: 'cat' },
    { id: '2', name: 'Rex', type: 'dog' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (PetService.getPets as jest.Mock).mockResolvedValue(mockPets);
  });

  it('should load and display pets', async () => {
    // Arrange
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    // Act - Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Fluffy')).toBeTruthy();
    });

    // Assert
    expect(screen.getByText('Rex')).toBeTruthy();
    expect(PetService.getPets).toHaveBeenCalledTimes(1);
  });
});
```

### Accessibility Testing
```typescript
// ✅ CORRECT: Accessibility testing
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button Accessibility', () => {
  it('should have proper accessibility props', () => {
    // Arrange
    render(<Button title="Test Button" onPress={jest.fn()} />);

    // Act
    const button = screen.getByText('Test Button');

    // Assert
    expect(button.props.accessibilityLabel).toBe('Test Button');
    expect(button.props.accessibilityRole).toBe('button');
    expect(button.props.accessibilityHint).toBeTruthy();
  });
});
```

## 📊 Test Coverage Standards

### Coverage Requirements
- **Minimum 80%** overall coverage
- **Minimum 90%** for critical business logic
- **100% coverage** for utility functions
- **100% coverage** for authentication flows
- **100% coverage** for error handling

### Coverage Configuration
```json
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/*.test.{ts,tsx}",
      "!src/**/*.spec.{ts,tsx}",
      "!src/__tests__/**"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
```

## 🛠️ Test Utilities

### Custom Test Utilities
```typescript
// __tests__/utils/test-utils.ts
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';

export const renderWithProviders = (
  ui: React.ReactElement,
  options = {}
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export const createMockUser = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
});

export const createMockPet = (overrides = {}) => ({
  id: '1',
  name: 'Fluffy',
  type: 'cat',
  age: 3,
  ...overrides,
});
```

### E2E Test Utilities
```typescript
// e2e/utils/testUtils.ts
import { device, element, by, expect } from 'detox';

export const loginUser = async (email: string, password: string) => {
  await element(by.id('email-input')).typeText(email);
  await element(by.id('password-input')).typeText(password);
  await element(by.id('login-button')).tap();
  await expect(element(by.id('home-screen'))).toBeVisible();
};

export const navigateToScreen = async (screenName: string) => {
  await element(by.id(`${screenName}-tab`)).tap();
  await expect(element(by.id(`${screenName}-screen`))).toBeVisible();
};

export const waitForElement = async (testId: string, timeout = 5000) => {
  await waitFor(element(by.id(testId))).toBeVisible().withTimeout(timeout);
};
```

## 🔧 Testing Commands

### Package.json Scripts
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:unit": "jest --testPathPattern=__tests__|.*\\.test\\.(ts|tsx)$",
    "test:e2e": "detox test --configuration ios.sim.debug",
    "test:e2e:android": "detox test --configuration android.emu.debug",
    "test:accessibility": "jest --testPathPattern=.*\\.accessibility\\.test\\.(ts|tsx)$",
    "test:visual": "jest --testPathPattern=.*\\.visual\\.test\\.(ts|tsx)$",
    "test:integration": "jest --testPathPattern=.*\\.integration\\.test\\.(ts|tsx)$"
  }
}
```

## 🚀 CI/CD Integration

### GitHub Actions Workflow
```yaml
# .github/workflows/tests.yml
name: Tests
on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:coverage

  e2e-tests:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:e2e
```

## 📋 Implementation Checklist

### Before Writing Tests:
- [ ] Understand the component/function behavior
- [ ] Identify all public interfaces
- [ ] List all edge cases and error scenarios
- [ ] Plan test data and mock requirements
- [ ] Set up test utilities and helpers

### Unit Test Implementation:
- [ ] Write test structure with AAA pattern
- [ ] Implement all happy path scenarios
- [ ] Add error and edge case tests
- [ ] Test user interactions and events
- [ ] Verify accessibility features
- [ ] Test performance if applicable

### UI Test Implementation:
- [ ] Write E2E tests for critical flows
- [ ] Add component integration tests
- [ ] Implement accessibility tests
- [ ] Create visual regression tests
- [ ] Add cross-platform compatibility tests
- [ ] Test performance for critical components

### Test Validation:
- [ ] All tests pass consistently
- [ ] Coverage meets minimum requirements
- [ ] Tests are readable and maintainable
- [ ] Error scenarios are properly tested
- [ ] Performance tests are reasonable
- [ ] Integration tests cover critical flows

## 🎯 Best Practices

### Development Workflow
1. **Write tests first** (TDD approach)
2. **Test all public interfaces** and edge cases
3. **Use descriptive test names** that explain the scenario
4. **Mock external dependencies** consistently
5. **Test error scenarios** and error handling
6. **Maintain high test coverage** for critical code
7. **Use test utilities** for common setup
8. **Test accessibility** features
9. **Test performance** for critical components
10. **Use TypeScript** in test files for type safety

### Code Review
1. **Check test coverage** for new code
2. **Verify test quality** and readability
3. **Review error scenarios** are tested
4. **Validate accessibility** tests are included
5. **Check performance** tests for critical components

### Maintenance
1. **Regular test audits** and updates
2. **Update test dependencies** regularly
3. **Review and update** test configurations
4. **Test all patterns** after updates
5. **Document changes** and new patterns

## 🔍 Troubleshooting

### Common Issues

#### Tests Not Running
- Check Jest configuration
- Verify test file naming conventions
- Check for TypeScript compilation errors
- Verify test environment setup

#### E2E Tests Failing
- Check Detox configuration
- Verify device/simulator setup
- Check for timing issues
- Verify element selectors

#### Coverage Issues
- Check coverage configuration
- Verify file exclusions
- Check for untested code paths
- Review coverage thresholds

#### Performance Issues
- Check test execution time
- Verify mock implementations
- Check for memory leaks
- Review test data size

### Getting Help
1. **Check this README** for general guidance
2. **Review specific rule files** for detailed information
3. **Check Jest documentation** for unit testing
4. **Check Detox documentation** for E2E testing
5. **Review testing community** resources

## 📈 Quick Reference

| Test Type | Framework | Priority | Coverage | Key Focus |
|-----------|-----------|----------|----------|-----------|
| Unit Tests | Jest + RTL | HIGH | 80%+ | Components, hooks, utilities |
| Integration Tests | Jest + RTL | MEDIUM | 90%+ | Component interactions |
| E2E Tests | Detox | HIGH | 100% | User journeys |
| Accessibility Tests | Jest + RTL | HIGH | 100% | Screen reader support |
| Visual Tests | Jest | MEDIUM | 100% | UI consistency |
| Performance Tests | Jest | LOW | 100% | Critical components |

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Compatibility**: React Native 0.80+, TypeScript 5.0+, Jest 29.0+, Detox 20.0+  
**Cursor Version**: Latest 