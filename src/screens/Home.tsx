import React from 'react';
import { Center, View } from 'native-base';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function openScreenAccount() {
    navigation.navigate('account');
  }

  return (
    <View bgColor="red.700" h="full" w="full">
      <Center m="16px">
        <Button title="Account" onPress={openScreenAccount} />
      </Center>
    </View>
  );
}
