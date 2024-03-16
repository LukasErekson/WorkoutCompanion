import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ExerciseDetails from './ExerciseDetails';
import ExerciseList from './ExerciseList';

export type ExerciseStackParamList = {
  Home: undefined;
  NewExercise: undefined;
  ExerciseDetails: undefined;
};

const ExercisesStack = createNativeStackNavigator<ExerciseStackParamList>();

function ExerciseScreen(): JSX.Element {
  return (
    <ExercisesStack.Navigator initialRouteName="Home">
      <ExercisesStack.Screen
        name="Home"
        options={{ title: 'Exercise List' }}
        component={ExerciseList}
      />
      <ExercisesStack.Screen
        name="ExerciseDetails"
        component={ExerciseDetails}
        options={({
          route,
        }: {
          route: RouteProp<ExerciseStackParamList, 'ExerciseDetails'>;
        }) => ({
          title: route.params.exerciseInfo.name,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
        })}
      />
    </ExercisesStack.Navigator>
  );
}

export default ExerciseScreen;
