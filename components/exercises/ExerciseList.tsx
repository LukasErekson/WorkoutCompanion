import React from 'react';
import {View} from 'react-native';
import ExerciseCard from './ExerciseCard';
import {Exercise} from '.';

const sampleExercise: Exercise = {
  name: 'Sit ups',
  restTime: '60 sec',
  sets: 3,
  weight: 'body',
  weightUnits: 'body weight',
  rep_min: 15,
  rep_max: 20,
  description:
    'Just doing some sit ups! This is just a long description for something so simple.',
};

const bp = require('../../Images/128px-Incline-bench-press-2.png');

const sampleExercise2: Exercise = {
  name: 'Bench Press',
  restTime: '2-3 minutes',
  sets: 3,
  weight: '110',
  weightUnits: 'lbs',
  rep_min: 6,
  rep_max: 8,
  image: bp,
  description:
    'Be sure to arch your back and keep your arms at a 45 degree angle.',
};

function ExerciseList({route, navigation}): JSX.Element {
  return (
    <View>
      <ExerciseCard exerciseInfo={sampleExercise} navigation={navigation} />
      <ExerciseCard exerciseInfo={sampleExercise2} />
    </View>
  );
}

export default ExerciseList;
