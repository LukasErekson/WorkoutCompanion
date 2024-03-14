/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import WorkoutScreen from './components/workouts/WorkoutScreen';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExerciseScreen from './components/exercises/ExerciseScreen';
import RoutineScreen from './components/routines/RoutineScreen';
import SettingsScreen from './components/settings/SettingsScreen';

export type RootStackParamList = {
  Workouts: undefined;
  Routines: undefined;
  Exercises: undefined;
  'Past Workouts': undefined;
  Settings: undefined;
};

const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

export type Props = NativeStackScreenProps<RootStackParamList, 'Workouts'>;

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F53C2F',
  },
};

const mainAppStyles = StyleSheet.create({});
const navigationBarStyles = {
  colors: {
    primary: MyTheme.colors.primary,
    active: 'black',
    inactive: 'white',
  },
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? DarkTheme : MyTheme;

  return (
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Workouts"
          activeColor={navigationBarStyles.colors.active}
          inactiveColor={navigationBarStyles.colors.inactive}
          barStyle={{backgroundColor: navigationBarStyles.colors.primary}}>
          <Stack.Screen
            name="Workouts"
            component={WorkoutScreen}
            options={{
              title: 'Workout',
              tabBarIcon: 'weight-lifter',
            }}
          />
          <Stack.Screen
            name="Exercises"
            component={ExerciseScreen}
            options={{
              title: 'Exercises',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="dumbbell"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Routines"
            component={RoutineScreen}
            options={{
              title: 'Routines',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="run" color={color} size={26} />
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Settings',
              tabBarIcon: 'cog',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
