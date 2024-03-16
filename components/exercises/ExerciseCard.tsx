import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-paper';
import { Exercise } from '.';
import { Button, ListItem } from '@rneui/base';

type DeleteExerciseSwipableProps = {
  reset: () => void;
  exerciseInfo: Exercise;
};

function DeleteExerciseSwipable({
  reset,
  exerciseInfo,
}: DeleteExerciseSwipableProps): JSX.Element {
  return (
    <Button
      title="Delete"
      onPress={() => {
        reset();
        // TODO : Navigate to confirmation of deletion and remove the exercise.
        console.log(exerciseInfo);
      }}
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  );
}

type EditExerciseSwipableProps = {
  reset: () => void;
  exerciseInfo: Exercise;
};

function EditExerciseSwipableProps({
  reset,
  exerciseInfo,
}: EditExerciseSwipableProps): JSX.Element {
  return (
    <Button
      title={'Edit ' + exerciseInfo.name}
      onPress={() => {
        reset();
        // TODO: Navigate to the edit menu
        console.log(exerciseInfo);
      }}
      icon={{ name: 'edit', color: 'white' }}
      buttonStyle={{ minHeight: '100%' }}
    />
  );
}

type ExerciseCardProps = {
  exerciseInfo: Exercise;
  navigation: { navigate: Function };
};

function ExerciseCard({
  exerciseInfo,
  navigation,
}: ExerciseCardProps): JSX.Element {
  const image = exerciseInfo.image ? exerciseInfo.image : null;

  return (
    <ListItem.Swipeable
      Component={TouchableHighlight}
      onPress={() =>
        navigation.navigate('ExerciseDetails', { exerciseInfo: exerciseInfo })
      }
      leftContent={(reset: () => void) => (
        <DeleteExerciseSwipable reset={reset} exerciseInfo={exerciseInfo} />
      )}
      rightContent={(reset: () => void) => (
        <EditExerciseSwipableProps reset={reset} exerciseInfo={exerciseInfo} />
      )}
      bottomDivider>
      {image && (
        <Image source={image} style={cardStyle.image} alt={exerciseInfo.name} />
      )}
      <ListItem.Content>
        <ListItem.Title style={cardStyle.title}>
          {exerciseInfo.name}
        </ListItem.Title>
        <Text>{exerciseInfo.description} </Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}

const cardStyle = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 10,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    minHeight: 100,
  },
  description: {
    textAlign: 'justify',
    padding: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
  },
  sets: {
    fontSize: 16,
    marginTop: -5,
    textAlign: 'center',
  },
  restTime: {
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: '40%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default ExerciseCard;
