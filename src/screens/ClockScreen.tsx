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
  Easing,
} from 'react-native';

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

class ClockScreen extends Component {
  state = {
    rotateAnimation: new Animated.Value(1),
  };

  componentDidMount(): void {
    const animation = Animated.timing(this.state.rotateAnimation, {
      toValue: 360,
      duration: 60000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    Animated.loop(animation).start();
  }

  rotation = () => {
    return this.state.rotateAnimation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
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
              backgroundColor: 'lightblue',
              alignItems: 'flex-end',
              transform: [{rotate: this.rotation()}],
              width: 150,
              height: 150,
              borderRadius: 75,
              justifyContent: 'center',
              position: 'relative',
            }}>
            <View
              style={{
                width: 3,
                height: 3,
                backgroundColor: '#000',
                borderRightWidth: 75,
              }}
            />
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ClockScreen;
