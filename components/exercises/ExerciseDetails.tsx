import { RouteProp } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Exercise } from '.';
import { ExerciseStackParamList } from './ExerciseScreen';

type ExerciseDetailsProps = {
  route: RouteProp<ExerciseStackParamList, 'ExerciseDetails'>;
};

type RouteParams = {
  exerciseInfo: Exercise;
};

function ExerciseDetails({ route }: ExerciseDetailsProps): JSX.Element {
  if (!route.params) {
    return (
      <View>
        <Text>TODO: Not Found Page</Text>
      </View>
    );
  }
  const exercise: Exercise = (route.params as RouteParams).exerciseInfo;

  const image = exercise.image ? exercise.image : null;

  return (
    <View>
      {image ? (
        <Image source={image} style={detailStyles.image} alt={exercise.name} />
      ) : (
        <Button
          title="Add Image"
          buttonStyle={detailStyles.image}
          icon={{ name: 'image', color: 'white' }}
        />
      )}
      <Text style={detailStyles.title}>{exercise.name}</Text>
      <Text>{exercise.description}</Text>
      <Button title="Edit Details" icon={{ name: 'edit', color: 'white' }} />
      <Button
        title="Delete Exercise"
        color="red"
        icon={{ name: 'delete', color: 'white' }}
      />
      <Text>Routines this exercise is a part of:</Text>
    </View>
  );
}

const detailStyles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
});

export default ExerciseDetails;
