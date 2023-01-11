import React from 'react';
import { Box, Text, HStack, Center } from 'native-base';

export function Header() {
  return (
    <Box bg="white" safeAreaTop w="full" alignSelf="center">
      <HStack
        bg="indigo.600"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        h="60px"
      >
        <Center w={'full'}>
          <Text color="white" fontSize="18">
            Home
          </Text>
        </Center>
      </HStack>
    </Box>
  );
}
