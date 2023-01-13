import React from 'react';
import { View } from 'native-base';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function openScreenAccount() {
    navigation.navigate('account');
  }

  return (
    <View bgColor="red.700" h="full" w="full">
      <Button title="Account" onPress={openScreenAccount} />
    </View>
  );
}
