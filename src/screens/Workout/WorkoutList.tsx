import { Center, Divider, HStack, ScrollView, VStack } from 'native-base';
import { WorkoutCard } from '../../components/WorkoutCard';

export function WorkoutList() {
  return (
    <ScrollView w="full" h="full">
      <Center my={'16px'}>
        <VStack space={3} w="90%">
          <HStack justifyContent="space-between">
            <WorkoutCard gifName="supino-inclinado-aparelho" />
          </HStack>
          <HStack justifyContent="space-between">
            <WorkoutCard gifName="supino-reto-aparelho" />
          </HStack>
        </VStack>
      </Center>
    </ScrollView>
  );
}
