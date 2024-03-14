import React from 'react';
import {View} from 'react-native';
import {Exercise} from '.';
import ExerciseCard from './ExerciseCard';

const sampleExercise: Exercise = {
  name: 'Sit ups',
  description:
    'Just doing some sit ups! This is just a long description for something so simple.',
};

const bp = require('../../Images/128px-Incline-bench-press-2.png');

const sampleExercise2: Exercise = {
  name: 'Bench Press',
  image: bp,
  description:
    'Be sure to arch your back and keep your arms at a 45 degree angle.',
};

function ExerciseList({route, navigation}): JSX.Element {
  return (
    <View>
      <ExerciseCard exerciseInfo={sampleExercise} navigation={navigation} />
      <ExerciseCard exerciseInfo={sampleExercise2} navigation={navigation} />
    </View>
  );
}

export default ExerciseList;
