import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {
  Animated,
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Easing,
} from 'react-native';

interface ScaleScreenProps {
  navigation: NavigationProp<RootStackParams, 'ScaleScreen'>;
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
  },
  animationItem: {
    height: 100,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  animationItemTitle: {
    fontSize: 20,
  },
});

class ScaleScreen extends Component {
  state = {
    scaleAnim: new Animated.Value(1),
  };

  scaleDown = () => {
    Animated.timing(this.state.scaleAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  scaleUp = () => {
    Animated.timing(this.state.scaleAnim, {
      toValue: 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.page}>
          <Button
            title={'Back to Animations'}
            onPress={() => this.props.navigation.navigate('AnimationsScreen')}
          />
          <Animated.View
            style={{
              marginTop: 100,
              padding: 20,
              backgroundColor: 'lightblue',
              alignItems: 'center',
              transform: [{scale: this.state.scaleAnim}],
            }}>
            <Text>Hello World!</Text>
          </Animated.View>
          <Button title={'Scale down'} onPress={this.scaleDown} />
          <Button title={'Scale up'} onPress={this.scaleUp} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ScaleScreen;
