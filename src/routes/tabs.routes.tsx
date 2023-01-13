import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Account } from '../screens/Account';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelStyle: { marginBottom: '6px', fontWeight: '600' }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      ></Screen>
      <Screen
        name="workout"
        component={Home}
        options={{
          title: 'Workout',
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" color={color} size={size} />
          )
        }}
      ></Screen>
      <Screen
        name="account"
        component={Account}
        options={{
          title: 'Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          )
        }}
      ></Screen>
    </Navigator>
  );
}
