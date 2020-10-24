import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

interface NavigationProps {}

export type RootStackParams = {
  HomeScreen: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
