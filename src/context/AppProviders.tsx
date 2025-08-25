import React, { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Future: add Context API providers derived from config.architecture.stateManagement

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      {children}
    </SafeAreaProvider>
  );
};

export default AppProviders;

