import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';
import { TabRoutes } from './tabs.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <TabRoutes />
    </NavigationContainer>
  );
}
