/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.red}>just red</Text>
              <Text style={styles.bigBlue}>just bigBlue</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>1</Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'pink'}}>
            <Text>2</Text>
          </View>
          <View style={{flex: 3, backgroundColor: '#ccc'}}>
            <Text>3</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  body: {
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
  red: {
    backgroundColor: 'red',
    color: '#fff',
    flex: 1,
  },
  bigBlue: {
    backgroundColor: 'powderblue',
    color: '#fff',
    flex: 1,
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
