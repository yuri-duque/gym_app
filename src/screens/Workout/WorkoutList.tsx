import { useState } from 'react';
import { Center, HStack, ScrollView, VStack } from 'native-base';
import { WorkoutCard } from '../../components/Workout/WorkoutCard';
import { Button } from '../../components/Button';

export function WorkoutList() {
  const [workouts, setWorkouts] = useState<Array<Workouts>>([
    { id: 1, name: 'A', workouts: baseWorkoutA },
    { id: 2, name: 'B', workouts: baseWorkoutB },
    { id: 3, name: 'C', workouts: baseWorkoutC }
  ]);
  const [workoutSelected, setWorkoutSelected] = useState<number>(
    workouts[0].id
  );
  const [workoutsShowed, setWorkoutsShowed] = useState<Array<Workout>>(
    workouts[0].workouts
  );

  const hancleChange = (workout: Workouts) => {
    setWorkoutSelected(workout.id);
    setWorkoutsShowed(workout.workouts);
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
                onPress={() => hancleChange(workout)}
                isPressed={workoutSelected === workout.id}
                width="30%"
                bg="blue.400"
                _pressed={{ bgColor: 'blue.700' }}
              />
            ))}
          </HStack>
          {workoutsShowed.map((workout, index) => (
            <HStack justifyContent="space-between" key={index}>
              <WorkoutCard workout={workout} key={index} />
            </HStack>
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
}

const baseWorkoutA: Array<Workout> = [
  {
    id: '1',
    name: 'Esteira',
    typeReps: 'tempo',
    typeTime: 'minutos',
    time: 15,
    gifName: 'esteira'
  },
  {
    id: '2',
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
    id: '3',
    name: 'Supino inclinado',
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
    id: '4',
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
    id: '5',
    name: 'Supino inclinado',
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
    id: '6',
    name: 'Supino inclinado',
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
