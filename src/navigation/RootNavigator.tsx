import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth/AuthStack';
import MainDrawer from './drawer/MainDrawer';
import SplashScreen from '../screens/SplashScreen';
import { navigationConfig } from '../config';

const RootNavigator: React.FC = () => {
  // Replace with real auth state from Context once wired
  const isAuthenticated = false;
  const splashEnabled = navigationConfig?.splash?.enabled ?? false;
  const [showSplash, setShowSplash] = React.useState(splashEnabled);

  React.useEffect(() => {
    if (!splashEnabled) return;
    const duration = navigationConfig?.splash?.duration ?? 1500;
    const timer = setTimeout(() => setShowSplash(false), duration);
    return () => clearTimeout(timer);
  }, [splashEnabled]);

  return (
    <NavigationContainer>
      {showSplash ? (
        <SplashScreen />
      ) : isAuthenticated ? (
        <MainDrawer />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

