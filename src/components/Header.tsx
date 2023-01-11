import React from 'react';
import { Box, Text, HStack, Center } from 'native-base';

export function Header() {
  return (
    <Box flex={1} bg="white" safeAreaTop w="full" h="full" alignSelf="center">
      <HStack
        bg="indigo.600"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        h="full"
      >
        <Center w={'full'}>
          <Text color="white" fontSize="18" bold>
            Home
          </Text>
        </Center>
      </HStack>
    </Box>
  );
}
