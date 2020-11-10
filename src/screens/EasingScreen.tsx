import React from 'react';
import {
  Animated,
  Button,
  Easing,
  EasingFunction,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../Navigation';
import {NavigationProp} from '@react-navigation/native';

interface EasingScreenProps {
  navigation: NavigationProp<RootStackParams, 'EasingScreen'>;
}

const SECTIONS = [
  {
    title: 'Predefined animations',
    data: [
      {title: 'Bounce', easing: Easing.bounce},
      {title: 'Ease', easing: Easing.ease},
      {title: 'Elastic', easing: Easing.elastic(4)},
    ],
  },
  {
    title: 'Standard functions',
    data: [
      {title: 'Linear', easing: Easing.linear},
      {title: 'Quad', easing: Easing.quad},
      {title: 'Cubic', easing: Easing.cubic},
    ],
  },
  {
    title: 'Additional functions',
    data: [
      {
        title: 'Bezier',
        easing: Easing.bezier(0, 2, 1, -1),
      },
      {title: 'Circle', easing: Easing.circle},
      {title: 'Sin', easing: Easing.sin},
      {title: 'Exp', easing: Easing.exp},
    ],
  },
  {
    title: 'Combinations',
    data: [
      {
        title: 'In + Bounce',
        easing: Easing.in(Easing.bounce),
      },
      {
        title: 'Out + Exp',
        easing: Easing.out(Easing.exp),
      },
      {
        title: 'InOut + Elastic',
        easing: Easing.inOut(Easing.elastic(1)),
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232a',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: '#61dafb',
  },
  boxContainer: {
    height: 160,
    alignItems: 'center',
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: '#61dafb',
  },
  list: {
    backgroundColor: '#fff',
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f4f4f4',
    color: '#999',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  listRow: {
    padding: 8,
  },
});

class EasingScreen extends React.Component {
  render() {
    let opacity = new Animated.Value(0);

    const animate = (easing: EasingFunction) => {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        easing,
        useNativeDriver: true,
      }).start();
    };

    const scale = opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const animatedStyles = [
      styles.box,
      {
        opacity,
        width: 80,
        height: 80,
        transform: [{scale: scale}],
      },
    ];

    return (
      <SafeAreaView>
        <View>
          <Button
            title={'Back to Animations'}
            onPress={() => this.props.navigation.navigate('AnimationsScreen')}
          />
          <Text>Press rows below to preview the Easing!</Text>
          <View style={styles.boxContainer}>
            <Animated.View style={animatedStyles} />
          </View>
          <SectionList
            style={styles.list}
            sections={SECTIONS}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => animate(item.easing)}
                style={styles.listRow}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.listHeader}>{title}</Text>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default EasingScreen;
