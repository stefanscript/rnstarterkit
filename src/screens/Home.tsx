import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {
  Animated,
  Button,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  Easing,
} from 'react-native';

interface HomeProps {
  navigation: NavigationProp<RootStackParams, 'HomeScreen'>;
}

export type GameType = 'single' | 'multi';

class Home extends Component {
  state = {
    fadeAnim: new Animated.Value(1),
    scaleAnim: new Animated.Value(2),
    openMenuAnim: new Animated.Value(0),
    isMenuOpen: false,
  };

  rotation = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg', '45deg'],
  });

  translateY = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: [-100, 0],
  });

  triggerOpacity = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: [1, 0],
  });

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

  openMenu = () => {
    if (this.state.isMenuOpen) {
      Animated.timing(this.state.openMenuAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start();
    } else {
      Animated.timing(this.state.openMenuAnim, {
        toValue: 45,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start();
    }
    this.setState((prevState) => {
      return {isMenuOpen: !prevState.isMenuOpen};
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Animated.View
          style={{
            padding: 20,
            backgroundColor: 'lightblue',
            alignItems: 'center',
            opacity: this.state.fadeAnim,
            transform: [{scale: this.state.scaleAnim}],
          }}>
          <Text>Hello World!</Text>
        </Animated.View>
        <Button title={'Scale down'} onPress={this.scaleDown} />
        <Button title={'Scale up'} onPress={this.scaleUp} />
        <Button title={'Fade In'} onPress={this.fadeIn} />
        <Button title={'Fade Out'} onPress={this.fadeOut} />
        <TouchableHighlight
          onPress={this.openMenu}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <>
            <Animated.View
              style={{
                borderWidth: 1,
                borderColor: 'orange',
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: this.triggerOpacity,
                position: 'absolute',
              }}
            />
            <Animated.Text
              style={{
                color: 'orange',
                fontSize: 28,
                fontWeight: '300',
                lineHeight: 28,
                transform: [{rotate: this.rotation}],
              }}>
              +
            </Animated.Text>
          </>
        </TouchableHighlight>
        <View
          style={{
            overflow: 'hidden',
          }}>
          <Animated.View
            style={{
              backgroundColor: 'orange',
              transform: [{translateY: this.translateY}],
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{width: 100, height: 100, backgroundColor: 'lightpink'}}>
              <Text>A</Text>
            </View>
            <View style={{width: 100, height: 100, backgroundColor: 'pink'}}>
              <Text>B</Text>
            </View>
            <View style={{width: 100, height: 100, backgroundColor: '#eee'}}>
              <Text>C</Text>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
