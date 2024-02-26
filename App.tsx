/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import WorkoutScreen from './components/workouts/WorkoutScreen';
import PastWorkoutScreen from './components/pastWorkouts/PastWorkoutScreen';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import ExerciseScreen from './components/exercises/ExerciseScreen';
import SettingsScreen from './components/settings/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RootStackParamList = {
  Workouts: undefined;
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
          {/* ({color}) => (
                <MaterialCommunityIcons
                  name="dumbbell"
                  color={color}
                  size={26}
                />
              ) */}
          <Stack.Screen
            name="Past Workouts"
            component={PastWorkoutScreen}
            options={{
              title: 'Workout History',
              tabBarIcon: 'history',
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
        {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Text>Hello there!</Text>
          </ScrollView> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
