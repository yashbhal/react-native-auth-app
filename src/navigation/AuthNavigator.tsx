// src/navigation/AuthNavigator.tsx
//Added comments to to test this
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import { colors } from '../theme/colors';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
