import React from 'react';
import { Icon, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from './src/screens/Home';
import { Account } from './src/screens/Account';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return (
                <Icon
                  mb="1"
                  as={<MaterialIcons name="search" />}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
