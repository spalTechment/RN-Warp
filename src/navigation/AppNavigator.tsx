// App-level navigator wiring Splash -> Auth -> Main tabs per config
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import AuthNavigator from './AuthNavigator';
import MainBottomTabs from './MainBottomTabs';
import SplashScreen from '../screens/SplashScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="AuthStack" component={AuthNavigator} />
        <RootStack.Screen name="MainBottomTabs" component={MainBottomTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

