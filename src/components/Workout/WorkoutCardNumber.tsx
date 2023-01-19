import { Box, Text } from 'native-base';

type WorkoutCardNumberProps = {
  primary?: string;
  secundary?: string;
  icon?: any;
};

export function WorkoutCardNumber({
  primary,
  secundary,
  icon
}: WorkoutCardNumberProps) {
  return (
    <Text fontSize="lg" fontWeight="500">
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        backgroundColor={'gray.50'}
        _web={{
          shadow: 2,
          borderWidth: 0
        }}
        minHeight="50px"
        width="100px"
        textAlign="center"
        justifyContent="center"
        py="2"
        mb="4"
      >
        {icon && icon}

        {secundary && (
          <Text fontSize="sm" color="coolGray.400" fontWeight="400">
            {secundary}
          </Text>
        )}

        {primary && (
          <Text fontSize="md" color="blue.500" fontWeight="500">
            {primary}
          </Text>
        )}
      </Box>
    </Text>
  );
}
