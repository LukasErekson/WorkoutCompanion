import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

export type RoutineStackParamList = {
  Home: undefined;
  NewRoutine: undefined;
  RoutineView: undefined;
  EditRoutine: undefined;
};

const RoutineStack = createNativeStackNavigator<RoutineStackParamList>();

const PlaceHolder = () => (
  <View>
    <Text>I'm a placeholder!</Text>
  </View>
);

function RoutineScreen(): JSX.Element {
  return (
    <RoutineStack.Navigator initialRouteName="Home">
      <RoutineStack.Screen
        name="Home"
        options={{title: 'Routines'}}
        component={PlaceHolder}
      />
      <RoutineStack.Screen
        name="NewRoutine"
        options={{title: 'New Routine'}}
        component={PlaceHolder}
      />
      <RoutineStack.Screen
        name="RoutineView"
        options={{title: 'Routine'}}
        component={PlaceHolder}
      />
      <RoutineStack.Screen
        name="EditRoutine"
        options={{title: 'Edit Routine'}}
        component={PlaceHolder}
      />
    </RoutineStack.Navigator>
  );
}

export default RoutineScreen;
