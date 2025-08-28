/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { AppProviders } from './src/context';
import { ErrorBoundary } from './src/components';
import { AppNavigator } from './src/navigation';
import './src/utils/coverageProbe';

function App() {
  return (
    <AppProviders>
      <StatusBar barStyle={'dark-content'} />
      <ErrorBoundary>
        <AppNavigator />
      </ErrorBoundary>
    </AppProviders>
  );
}

export default App;
