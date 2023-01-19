import { useState } from 'react';
import { Center, HStack, ScrollView, VStack } from 'native-base';
import { WorkoutCard } from '../../components/Workout/WorkoutCard';
import { Button } from '../../components/Button';

export function WorkoutList() {
  const [workouts, setWorkouts] = useState<Array<Workouts>>([
    { name: 'A', workouts: baseWorkoutA },
    { name: 'B', workouts: baseWorkoutB },
    { name: 'C', workouts: baseWorkoutC }
  ]);
  const [workoutSelected, setWorkoutSelected] = useState<Array<Workout>>(
    workouts[0].workouts
  );

  const hancleChange = (workout: Array<Workout>) => {
    setWorkoutSelected(workout);
  };

  return (
    <ScrollView w="full" h="full">
      <Center my={'16px'}>
        <VStack space={3} w="90%">
          <HStack justifyContent="space-between">
            {workouts.map((workout, index) => (
              <Button
                key={index}
                title={workout.name}
                onPress={() => hancleChange(workout.workouts)}
                width="30%"
                bg="blue.500"
              />
            ))}
          </HStack>
          {workoutSelected.map((workout, index) => (
            <HStack justifyContent="space-between" key={index}>
              <WorkoutCard workout={workout} />
            </HStack>
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
}

const baseWorkoutA: Array<Workout> = [
  {
    name: 'Esteira',
    typeReps: 'tempo',
    typeTime: 'minutos',
    time: 15,
    gifName: 'esteira'
  },
  {
    name: 'Supino reto',
    typeReps: 'repetições',
    sets: 3,
    reps: [15, 12, 10],
    typeWeights: 'placas',
    weights: [10, 13, 16],
    typeRest: 'segundos',
    rest: 60,
    gifName: 'supino-reto-aparelho'
  },
  {
    name: 'Esteira',
    typeReps: 'repetições',
    sets: 3,
    reps: [15, 12, 10],
    typeWeights: 'kg',
    weights: [14, 16, 18],
    typeRest: 'segundos',
    rest: 60,
    gifName: 'supino-inclinado-aparelho'
  }
];

const baseWorkoutB: Array<Workout> = [
  {
    name: 'Supino reto',
    typeReps: 'repetições',
    sets: 3,
    reps: [15, 12, 10],
    typeWeights: 'placas',
    weights: [10, 13, 16],
    typeRest: 'segundos',
    rest: 60,
    gifName: 'supino-reto-aparelho'
  },
  {
    name: 'Esteira',
    typeReps: 'repetições',
    sets: 3,
    reps: [15, 12, 10],
    typeWeights: 'kg',
    weights: [14, 16, 18],
    typeRest: 'segundos',
    rest: 60,
    gifName: 'supino-inclinado-aparelho'
  }
];

const baseWorkoutC: Array<Workout> = [
  {
    name: 'Esteira',
    typeReps: 'repetições',
    sets: 3,
    reps: [15, 12, 10],
    typeWeights: 'kg',
    weights: [14, 16, 18],
    typeRest: 'segundos',
    rest: 60,
    gifName: 'supino-inclinado-aparelho'
  }
];
