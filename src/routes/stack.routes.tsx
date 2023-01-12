import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Account } from '../screens/Account';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home}></Screen>
      <Screen name="account" component={Account}></Screen>
    </Navigator>
  );
}
