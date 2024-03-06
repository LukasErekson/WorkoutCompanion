import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Exercise} from '.';
import {ExerciseStackParamList} from './ExerciseScreen';

type ExerciseDetailsProps = {
  route: RouteProp<ExerciseStackParamList, 'ExerciseDetails'>;
};

function ExerciseDetails({route}: ExerciseDetailsProps): JSX.Element {
  const exercise: Exercise = route.params.exerciseInfo;

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>{exercise.description}</Text>
    </View>
  );
}

export default ExerciseDetails;
