import React from 'react';
import {Props} from '../../App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WorkoutList from './screens/WorkoutList';

export type WorkoutStackParamList = {
  Home: undefined;
  CurrentWorkout: undefined;
  NewWorkoutTemplate: undefined;
};

const WorkoutStack = createNativeStackNavigator<WorkoutStackParamList>();

function WorkoutScreen({route, navigation}: Props): JSX.Element {
  return (
    <WorkoutStack.Navigator initialRouteName="Home">
      <WorkoutStack.Screen
        name="Home"
        options={{title: 'New Workout'}}
        component={WorkoutList}
      />
      <WorkoutStack.Screen
        name="CurrentWorkout"
        options={{title: 'Current Workout'}}
        component={WorkoutList}
      />
      <WorkoutStack.Screen
        name="NewWorkoutTemplate"
        options={{title: 'New Workout Template'}}
        component={WorkoutList}
      />
    </WorkoutStack.Navigator>
  );
}

export default WorkoutScreen;

/**
 <View>
            <Text>1. Start New Workout</Text>
            <Text>2. View current Excercises if current workout active</Text>
            <Text>3. Save workout as JSON somewhere in file system.</Text>
          </View>
 */
