import React from 'react';
import { Center, View } from 'native-base';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Account() {
  const navigation = useNavigation();

  function openScreenHome() {
    navigation.navigate('home');
  }

  return (
    <View bgColor="blue.700" h="full" w="full">
      <Center m="16px">
        <Button title="Home" onPress={openScreenHome} />
      </Center>
    </View>
  );
}
