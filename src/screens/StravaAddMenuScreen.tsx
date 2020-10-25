import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {
  Animated,
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet, Easing, Pressable,
} from 'react-native';

interface StravaAddMenuScreen {
  navigation: NavigationProp<RootStackParams, 'StravaAddMenuScreen'>;
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

class StravaAddMenuScreen extends Component {
  state = {
    openMenuAnim: new Animated.Value(0),
    isMenuOpen: false,
  };

  rotation = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg', '45deg'],
  });

  translateY = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: [-50, 0],
  });

  triggerOpacity = this.state.openMenuAnim.interpolate({
    inputRange: [0, 45],
    outputRange: [1, 0],
  });

  openMenu = () => {
    if (this.state.isMenuOpen) {
      Animated.timing(this.state.openMenuAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start();
    } else {
      Animated.timing(this.state.openMenuAnim, {
        toValue: 45,
        duration: 50,
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
        <View style={styles.page}>
          <Button
            title={'Back to Home'}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
          <Pressable
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
          </Pressable>
          <View
            style={{
              overflow: 'hidden',
            }}>
            <Animated.View
              style={{
                backgroundColor: '#fff',
                transform: [{translateY: this.translateY}],
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{width: 50, height: 50, backgroundColor: 'lightpink'}}>
                <Text>A</Text>
              </View>
              <View style={{width: 50, height: 50, backgroundColor: 'pink'}}>
                <Text>B</Text>
              </View>
              <View style={{width: 50, height: 50, backgroundColor: '#eee'}}>
                <Text>C</Text>
              </View>
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default StravaAddMenuScreen;
