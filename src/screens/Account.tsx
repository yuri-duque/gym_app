import React from 'react';
import { View } from 'native-base';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Account() {
  const navigation = useNavigation();

  function openScreenHome() {
    navigation.navigate('home');
  }

  return (
    <View bgColor="green.700" h="full" w="full">
      <Button title="Home" onPress={openScreenHome} />
    </View>
  );
}
