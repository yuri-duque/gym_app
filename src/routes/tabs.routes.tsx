import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Account } from '../screens/Account';
import { Home } from '../screens/Home';
import { WorkoutList } from '../screens/Workout/WorkoutList';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          marginBottom: '4px',
          fontWeight: '600'
        },
        tabBarIconStyle: { marginTop: '6px' },
        headerStyle: { height: '48px' }
      }}
      initialRouteName="workout"
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
        component={WorkoutList}
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
