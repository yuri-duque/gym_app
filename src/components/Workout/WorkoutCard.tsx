import { Box, Flex, Heading, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { WorkoutCardNumber } from './WorkoutCardNumber';
import { WorkoutGif } from './WorkoutGif';

type WorkoutCardProps = {
  workout: Workout;
};

export function WorkoutCard({ workout }: WorkoutCardProps) {
  const iconSize = 22;
  const iconColor = '#9aa0a6';

  return (
    <Box alignItems="center" w="full">
      <Box
        w="full"
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
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" color={'gray.500'} textAlign="center">
              {workout.name}
            </Heading>
          </Stack>

          {workout.gifName && (
            <WorkoutGif id={workout.id} gifName={workout.gifName} />
          )}

          <Flex
            direction="row"
            flexWrap={'wrap'}
            justifyContent={
              workout.time && !workout.sets ? 'center' : 'space-between'
            }
          >
            {workout.sets && (
              <WorkoutCardNumber
                primary={workout.sets.toString()}
                icon={
                  <MaterialIcons
                    name="done-all"
                    size={iconSize}
                    color={iconColor}
                  />
                }
              />
            )}

            {workout.reps && (
              <WorkoutCardNumber
                primary={workout.reps.join(' | ')}
                icon={
                  <MaterialIcons
                    name="autorenew"
                    size={iconSize}
                    color={iconColor}
                  />
                }
              />
            )}

            {workout.weights && (
              <WorkoutCardNumber
                primary={workout.weights.join(' | ')}
                icon={
                  workout.typeWeights == 'kg' ? (
                    <MaterialIcons
                      name="fitness-center"
                      size={iconSize}
                      color={iconColor}
                    />
                  ) : (
                    <MaterialIcons
                      name="menu"
                      size={iconSize}
                      color={iconColor}
                    />
                  )
                }
              />
            )}

            {workout.time && (
              <WorkoutCardNumber
                primary={workout.time.toString()}
                icon={
                  <MaterialIcons
                    name="timer"
                    size={iconSize}
                    color={iconColor}
                  />
                }
              />
            )}

            {workout.rest && (
              <WorkoutCardNumber
                primary={workout.rest.toString()}
                secundary={workout.typeRest}
              />
            )}
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
