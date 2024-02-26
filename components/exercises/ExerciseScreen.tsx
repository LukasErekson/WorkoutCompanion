import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import ExerciseList from './ExerciseList';

export type ExerciseStackParamList = {
  Home: undefined;
  NewExercise: undefined;
  ExerciseDetails: undefined;
};

const ExercisesStack = createNativeStackNavigator<ExerciseStackParamList>();

const SampleComponent = () => (
  <View>
    <Text>See Exercises here!</Text>
  </View>
);

function ExerciseScreen(): JSX.Element {
  return (
    <ExercisesStack.Navigator initialRouteName="Home">
      <ExercisesStack.Screen
        name="Home"
        options={{title: 'Exercise List'}}
        component={ExerciseList}
      />
    </ExercisesStack.Navigator>
  );
}

export default ExerciseScreen;
