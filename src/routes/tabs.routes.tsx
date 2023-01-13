import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Account } from '../screens/Account';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createBottomTabNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home}></Screen>
      <Screen name="account" component={Account}></Screen>
    </Navigator>
  );
}
