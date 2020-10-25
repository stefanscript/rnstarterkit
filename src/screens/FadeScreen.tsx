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
} from 'react-native';

interface FadeScreenProps {
  navigation: NavigationProp<RootStackParams, 'FadeScreen'>;
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

class FadeScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(1),
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.page}>
          <Button
            title={'Back to Home'}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
          <Animated.View
            style={{
              padding: 20,
              backgroundColor: 'lightblue',
              alignItems: 'center',
              opacity: this.state.fadeAnim,
            }}>
            <Text>Hello World!</Text>
          </Animated.View>
          <Button title={'Fade In'} onPress={this.fadeIn} />
          <Button title={'Fade Out'} onPress={this.fadeOut} />
        </View>
      </SafeAreaView>
    );
  }
}

export default FadeScreen;
