import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import FadeScreen from './screens/FadeScreen';
import ScaleScreen from './screens/ScaleScreen';
import StravaAddMenuScreen from './screens/StravaAddMenuScreen';
import AnimationsScreen from './screens/AnimationsScreen';
import VideoTestScreen from './screens/VideoTestScreen';
import ClockScreen from './screens/ClockScreen';

interface NavigationProps {}

export type RootStackParams = {
  HomeScreen: undefined;
  AnimationsScreen: undefined;
  VideoTestScreen: undefined;
  FadeScreen: undefined;
  ScaleScreen: undefined;
  StravaAddMenuScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function Navigation(props: NavigationProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackPresentation: 'push',
          headerShown: false,
        }}>
        <Stack.Screen component={Home} name="HomeScreen" />
        <Stack.Screen component={AnimationsScreen} name="AnimationsScreen" />
        <Stack.Screen component={VideoTestScreen} name="VideoTestScreen" />
        <Stack.Screen component={FadeScreen} name="FadeScreen" />
        <Stack.Screen component={ScaleScreen} name="ScaleScreen" />
        <Stack.Screen
          component={StravaAddMenuScreen}
          name="StravaAddMenuScreen"
        />
        <Stack.Screen component={ClockScreen} name="ClockScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
