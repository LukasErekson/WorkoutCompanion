import React from 'react';
import {Button, Text, View} from 'react-native';
import {Props} from '../../App';

function HomeScreen({route, navigation}: Props): JSX.Element {
  return (
    <View>
      <Text>Hi, mom!</Text>
    </View>
  );
}

export default HomeScreen;
