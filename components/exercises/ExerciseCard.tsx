import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Exercise} from '.';

function ExerciseCard({exerciseInfo}: {exerciseInfo: Exercise}): JSX.Element {
  const image = exerciseInfo.image ? exerciseInfo.image : null;

  return (
    <TouchableOpacity style={cardStyle.cardContainer}>
      <Image source={image} style={cardStyle.image} alt={'What'} />

      <View style={cardStyle.cardText}>
        <Text style={cardStyle.title}>{exerciseInfo.name}</Text>
        <Text style={cardStyle.sets}>
          {exerciseInfo.sets} set{exerciseInfo.sets > 1 ? 's' : ''} of{' '}
          {exerciseInfo.rep_min} - {exerciseInfo.rep_max} reps
        </Text>
        <Text style={cardStyle.restTime}>
          Rest {exerciseInfo.restTime} between sets
        </Text>
        <Text>{exerciseInfo.description?.slice(0, 30)}... </Text>
      </View>
    </TouchableOpacity>
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
  },
  cardText: {
    // backgroundColor: 'rgba(0,0,0,0.25)',
    display: 'flex',
    width: '55%',
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
