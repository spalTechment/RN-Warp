# React Native Navigation Rules - Universal Config-Driven

This directory contains universal, config-driven navigation rules for React Native apps. Each rule is optimized, follows coding standards, and works with any project configuration.

## 🎯 **Available Rules**

### 1. `auth-drawer.mdc` ⭐ **Most Popular**
**Use for**: Authentication flow + drawer navigation
- **Auth Flow**: Login → OTP → Passcode → Profile → MainDrawer
- **Main App**: Drawer navigation with hamburger menu
- **Universal**: Works with any screen configuration
- **Lines**: ~337 (Optimized)
- **Perfect for**: Business apps, admin panels, content management

### 2. `auth-bottom-tab.mdc` 🆕 **New**
**Use for**: Authentication flow + bottom tab navigation
- **Auth Flow**: Login → OTP → Profile → MainTab
- **Main App**: Bottom tab navigation with icons
- **Universal**: Works with any screen configuration
- **Lines**: ~347 (Optimized)
- **Perfect for**: Social media apps, e-commerce, mobile-first apps

### 3. `combined-navigation.mdc`
**Use for**: Complex apps with multiple navigation types
- **Navigation**: Drawer + Tabs + Stack
- **Auth Flow**: Complete authentication system
- **Complex Hierarchy**: Multiple nested navigators
- **Lines**: ~174 (Optimized)
- **Perfect for**: Enterprise apps, complex workflows

## 🚀 **Quick Start**

### For Auth + Drawer Apps (Most Common)
```bash
# Use the universal auth-drawer rule
cursor --rule .cursor/rules/navigation/auth-drawer.mdc
```

### For Auth + Bottom Tab Apps
```bash
# Use the universal auth-bottom-tab rule
cursor --rule .cursor/rules/navigation/auth-bottom-tab.mdc
```

### For Complex Apps
```bash
# Use the combined navigation rule
cursor --rule .cursor/rules/navigation/combined-navigation.mdc
```

## �� **Rule Selection Guide**

| App Type | Navigation Pattern | Recommended Rule | Use Case |
|----------|-------------------|------------------|----------|
| **Business App** | Auth + Drawer | `auth-drawer.mdc` | Admin panels, dashboards |
| **Social App** | Auth + Bottom Tabs | `auth-bottom-tab.mdc` | Social media, messaging |
| **E-commerce** | Auth + Bottom Tabs | `auth-bottom-tab.mdc` | Shopping, marketplace |
| **Enterprise** | Complex hierarchy | `combined-navigation.mdc` | Multi-module apps |
| **Content App** | Drawer only | `auth-drawer.mdc` | News, blogs, CMS |

## ⚙️ **Configuration-Driven Approach**

All rules use a universal configuration structure that reads from `config/*-project-config.json`:

### Auth-Drawer Configuration
```json
{
  "navigation": {
    "type": "auth-drawer",
    "auth": {
      "screens": ["Login", "OTP", "Passcode", "Profile"],
      "initialScreen": "Login",
      "flow": {
        "Login": { "onSuccess": "OTP", "component": "LoginScreen" },
        "OTP": { "onSuccess": "Passcode", "component": "OTPScreen" },
        "Passcode": { "onSuccess": "Profile", "component": "PasscodeScreen" },
        "Profile": { "onSuccess": "MainDrawer", "component": "ProfileScreen" }
      }
    },
    "main": {
      "type": "drawer",
      "screens": ["Home", "Profile", "Settings"],
      "initialScreen": "Home",
      "drawerConfig": {
        "drawerType": "front",
        "swipeEdgeWidth": 50,
        "gestureEnabled": true,
        "headerShown": true
      }
    },
    "splash": {
      "enabled": true,
      "duration": 2000,
      "component": "SplashScreen"
    }
  }
}
```

### Auth-Bottom-Tab Configuration
```json
{
  "navigation": {
    "type": "auth-bottom-tab",
    "auth": {
      "screens": ["Login", "OTP", "Profile"],
      "flow": {
        "Login": { "onSuccess": "OTP", "component": "LoginScreen" },
        "OTP": { "onSuccess": "Profile", "component": "OTPScreen" },
        "Profile": { "onSuccess": "MainTab", "component": "ProfileScreen" }
      }
    },
    "main": {
      "type": "bottom-tabs",
      "screens": ["Home", "Search", "Notifications", "Profile"],
      "tabConfig": {
        "headerShown": true,
        "tabBarActiveTintColor": "#007AFF",
        "tabBarInactiveTintColor": "#8E8E93"
      }
    }
  }
}
```

## 📦 **Dependencies**

### Universal Dependencies (All Rules)
```bash
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context
```

### Auth-Drawer Specific
```bash
npm install @react-navigation/drawer
```

### Auth-Bottom-Tab Specific
```bash
npm install @react-navigation/bottom-tabs
```

## 🏗️ **File Structure**

### Auth-Drawer Structure
```
src/
├── navigation/
│   ├── types.ts
│   ├── AppNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── MainDrawerNavigator.tsx
├── screens/
│   ├── auth/[AuthScreenName]Screen.tsx
│   ├── main/[MainScreenName]Screen.tsx
│   └── splash/SplashScreen.tsx
└── App.tsx
```

### Auth-Bottom-Tab Structure
```
src/
├── navigation/
│   ├── types.ts
│   ├── AppNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── MainTabNavigator.tsx
├── screens/
│   ├── auth/[AuthScreenName]Screen.tsx
│   ├── main/[MainScreenName]Screen.tsx
│   └── splash/SplashScreen.tsx
└── App.tsx
```

## 🔧 **Critical Provider Setup**

All rules require this exact provider hierarchy in `App.tsx`:

```typescript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;
```

## 🎨 **Universal Screen Templates**

### Auth Screen Template
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/types';
import { config } from '../../../config/*-project-config.json';

type Props = StackScreenProps<AuthStackParamList, '[ScreenName]'>;

const [ScreenName]Screen: React.FC<Props> = ({ navigation, route }) => {
  const handleSuccess = () => {
    const nextScreen = config.navigation.auth.flow['[ScreenName]'].onSuccess;
    if (nextScreen === 'MainDrawer' || nextScreen === 'MainTab') {
      // Handle transition to main app
    } else {
      navigation.navigate(nextScreen as keyof AuthStackParamList);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>[ScreenName] Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleSuccess}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  buttonText: { fontSize: 16, fontWeight: '600' },
});

export default [ScreenName]Screen;
```

### Main Screen Template
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer'; // or BottomTabScreenProps
import { MainDrawerParamList } from '../../navigation/types'; // or MainTabParamList

type Props = DrawerScreenProps<MainDrawerParamList, '[ScreenName]'>;

const [ScreenName]Screen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>[ScreenName] Screen</Text>
      <Text style={styles.subtitle}>Add your content here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16 },
});

export default [ScreenName]Screen;
```

## 📝 **Perfect Prompts for Cursor.ai**

### For Auth-Drawer Apps
```
Implement auth-drawer navigation using the universal auth-drawer rule. Read from config/*-project-config.json and generate all navigation files dynamically. Include SafeAreaProvider and GestureHandlerRootView in App.tsx. Create placeholder screens for all auth and main screens defined in config.
```

### For Auth-Bottom-Tab Apps
```
Implement auth-bottom-tab navigation using the universal auth-bottom-tab rule. Read from config/*-project-config.json and generate all navigation files dynamically. Include SafeAreaProvider and GestureHandlerRootView in App.tsx. Create placeholder screens for all auth and main screens defined in config. Add tab bar icons for each main screen.
```

### For Complex Apps
```
Implement combined navigation using the universal combined-navigation rule. Read from config/*-project-config.json and generate all navigation files dynamically. Include SafeAreaProvider and GestureHandlerRootView in App.tsx. Create placeholder screens for all defined screens.
```

## ✅ **Key Rules**

### ✅ DO's:
- **Read navigation config** from `config/*-project-config.json`
- **Generate types dynamically** from config arrays
- **Create screens dynamically** based on config.screens arrays
- **Use config.flow** for navigation between auth screens
- **Follow config.fileStructure** for file organization
- **Use config.design** for styling and theming
- **ALWAYS wrap App.tsx in SafeAreaProvider and GestureHandlerRootView**
- **Import 'react-native-gesture-handler' at the top of App.tsx**

### ❌ DON'Ts:
- **Never hardcode screen names** in navigation files
- **Don't assume screen order** - always use config
- **Don't create screens** not defined in config
- **Don't hardcode navigation logic** - use config.flow
- **Don't hardcode colors or styling** - use config.design
- **Don't forget SafeAreaProvider** - required for proper layout
- **Don't forget GestureHandlerRootView** - required for gesture handling

## 🔧 **Platform Setup**

### Android (android/app/build.gradle)
```gradle
dependencies {
    implementation 'com.facebook.react:react-native-gesture-handler:2.x.x'
}
```

### iOS (ios/Podfile)
```ruby
pod 'RNGestureHandler', :path => '../node_modules/react-native-gesture-handler'
pod 'RNSafeAreaContext', :path => '../node_modules/react-native-safe-area-context'
```

## 🎯 **Usage Examples**

### AVO Project (Auth-Drawer)
```json
{
  "navigation": {
    "type": "auth-drawer",
    "auth": {
      "screens": ["Login", "OTP", "Passcode", "Profile"],
      "flow": {
        "Login": { "onSuccess": "OTP", "component": "LoginScreen" },
        "OTP": { "onSuccess": "Passcode", "component": "OTPScreen" },
        "Passcode": { "onSuccess": "Profile", "component": "PasscodeScreen" },
        "Profile": { "onSuccess": "MainDrawer", "component": "ProfileScreen" }
      }
    },
    "main": {
      "type": "drawer",
      "screens": ["NewAssignments", "AwardedAssignments", "PendingInvoices", "PastInvoices", "CancelledAssignments", "Profile", "MyCredentials", "AssignmentToBid"],
      "initialScreen": "NewAssignments"
    }
  }
}
```

### ShopMaster Project (Auth-Bottom-Tab)
```json
{
  "navigation": {
    "type": "auth-bottom-tab",
    "auth": {
      "screens": ["Login", "Register", "OTP", "Profile"],
      "flow": {
        "Login": { "onSuccess": "OTP", "component": "LoginScreen" },
        "Register": { "onSuccess": "OTP", "component": "RegisterScreen" },
        "OTP": { "onSuccess": "Profile", "component": "OTPScreen" },
        "Profile": { "onSuccess": "MainTab", "component": "ProfileScreen" }
      }
    },
    "main": {
      "type": "bottom-tabs",
      "screens": ["Home", "Categories", "Cart", "Orders", "Wishlist", "Profile", "Addresses", "Support"],
      "initialScreen": "Home"
    }
  }
}
```

## 🚀 **Benefits**

1. **✅ Universal**: Works with any React Native project
2. **✅ Config-Driven**: All navigation logic from config
3. **✅ Type Safe**: Dynamic TypeScript types
4. **✅ Platform Compatible**: Works on iOS and Android
5. **✅ Optimized**: Concise and focused rules
6. **✅ Future-Proof**: No hardcoded values
7. **✅ Standards Compliant**: Follows coding standards
8. **✅ Provider Ready**: Includes all required providers

## 🆘 **Troubleshooting**

### Common Issues
1. **Drawer not working on Android**: Ensure GestureHandlerRootView is included
2. **Safe area issues**: Ensure SafeAreaProvider is included
3. **Gesture problems**: Import 'react-native-gesture-handler' at top of App.tsx
4. **Type errors**: Check config structure matches rule requirements

### Quick Fixes
```bash
# Clean and rebuild
npx react-native clean
npx react-native run-android
npx react-native run-ios

# Reinstall dependencies
rm -rf node_modules
npm install
cd ios && pod install && cd ..
```

## 📚 **Additional Resources**

- [React Navigation Documentation](https://reactnavigation.org/)
- [Gesture Handler Documentation](https://docs.swmansion.com/react-native-gesture-handler/)
- [Safe Area Context Documentation](https://github.com/th3rdwave/react-native-safe-area-context)

---

**All rules are universal, config-driven, and optimized for any React Native project!** 🎉
