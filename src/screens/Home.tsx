import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';

interface HomeProps {
  navigation: NavigationProp<RootStackParams, 'HomeScreen'>;
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
  },
  animationItem: {
    height: 100,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  animationItemTitle: {
    fontSize: 20,
  },
});

const items = [
  {title: 'Fade', screen: 'FadeScreen'},
  {title: 'Scale', screen: 'ScaleScreen'},
  {title: 'Strava Add Menu', screen: 'StravaAddMenuScreen'},
];

class Home extends Component {
  state = {
    entryAnim: new Animated.Value(-50),
  };

  componentDidMount(): void {
    Animated.timing(this.state.entryAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }

  entryAnimForItem = (index: number) => {
    return this.state.entryAnim.interpolate({
      inputRange: [-50, 0],
      outputRange: [-50 * index, 0],
    });
  };

  opacityAnimForItem = (index: number) => {
    return this.state.entryAnim.interpolate({
      inputRange: [-50, 0],
      outputRange: [0, 1],
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.page}>
          <Text style={{fontSize: 20}}>Home</Text>
          {items.map((item, index) => {
            return (
              <Animated.View
                key={item.screen}
                style={[
                  styles.animationItem,
                  {
                    opacity: this.opacityAnimForItem(index),
                    transform: [{translateX: this.entryAnimForItem(index)}],
                  },
                ]}>
                <Pressable
                  onPress={() => this.props.navigation.navigate(item.screen)}>
                  <Text style={styles.animationItemTitle}>{item.title}</Text>
                </Pressable>
              </Animated.View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
