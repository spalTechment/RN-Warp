import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import OTPScreen from '../../screens/auth/OTPScreen';
import PasscodeScreen from '../../screens/auth/PasscodeScreen';
import ProfileScreen from '../../screens/auth/ProfileScreen';
import type { AuthStackParamList } from '../../types/AppTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Passcode" component={PasscodeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

