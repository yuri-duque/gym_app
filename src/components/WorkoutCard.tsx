import { Box, Heading, HStack, Stack, Text } from 'native-base';
import { WorkoutGif } from './WorkoutGif';

type WorkoutCardProps = {
  gifName: string;
};

export function WorkoutCard({ gifName }: WorkoutCardProps) {
  return (
    <Box alignItems="center" w="full">
      <Box
        maxW="full"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        backgroundColor={'gray.50'}
        _web={{
          shadow: 2,
          borderWidth: 0
        }}
      >
        <WorkoutGif gifName={gifName} />
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              color="violet.500"
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
