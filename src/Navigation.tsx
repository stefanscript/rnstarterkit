import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import FadeScreen from './screens/FadeScreen';
import ScaleScreen from './screens/ScaleScreen';
import StravaAddMenuScreen from './screens/StravaAddMenuScreen';

interface NavigationProps {}

export type RootStackParams = {
  HomeScreen: undefined;
  FadeScreen: undefined;
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
        <Stack.Screen component={FadeScreen} name="FadeScreen" />
        <Stack.Screen component={ScaleScreen} name="ScaleScreen" />
        <Stack.Screen
          component={StravaAddMenuScreen}
          name="StravaAddMenuScreen"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
