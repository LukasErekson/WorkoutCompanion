/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import HomeScreen from './screens/home/HomeScreen';
import PastWorkoutScreen from './screens/pastWorkouts/PastWorkoutScreen';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RootStackParamList = {
  Home: undefined;
  Excercises: undefined;
  'Past Workouts': undefined;
  Settings: undefined;
};

const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          /> */}
        <Stack.Navigator
          initialRouteName="Home"
          activeColor="black"
          inactiveColor="white"
          barStyle={{backgroundColor: '#55aaff'}}
          // theme
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Workout',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="weight-lifter"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Exercises"
            component={PastWorkoutScreen}
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
            name="Past Workouts"
            component={PastWorkoutScreen}
            options={{
              title: 'Workout History',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="history"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={PastWorkoutScreen}
            options={{
              title: 'Settings',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
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

const mainAppStyles = StyleSheet.create({});

export default App;
