import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../Navigation';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import Video from 'react-native-video';
import {Dimensions} from 'react-native';

const video = require('../videos/pexel_video1.mp4');

interface VideoTestScreenProps {
  navigation: NavigationProp<RootStackParams, 'VideoTestScreen'>;
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
  },
  backgroundVideo: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width / 2,
  },
});

class VideoTestScreen extends Component {
  // player = React.createRef();
  onBuffer() {
    console.log('buffering');
  }
  videoError() {
    console.log('buffering');
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.page}>
          <Button
            title={'Back to Home'}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
          <Text style={{fontSize: 20}}>Video Test Screen</Text>

          <Video
            source={video}
            // ref={(ref) => {
            //   this.player = ref;
            // }}
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            controls={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default VideoTestScreen;
