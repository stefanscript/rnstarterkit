import * as React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {Text} from 'react-native';

interface HomeProps {
  navigation: NavigationProp<RootStackParams, 'HomeScreen'>;
}
export type GameType = 'single' | 'multi';

function Home({navigation}: HomeProps) {
  return <Text>Hello World!</Text>;
}

export default Home;
