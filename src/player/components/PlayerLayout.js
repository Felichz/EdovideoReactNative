import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';

import ControlLayout from './ControlLayout';

const PlayerLayout = ({videoUri, videoProps, controlProps, loading}) => (
  <View style={styles.container}>
    <View style={styles.videoWrapper}>
      <Video
        controls
        style={styles.video}
        source={{uri: videoUri}}
        resizeMode="contain"
        {...videoProps}
      />
    </View>
    <View style={styles.overlay}>
      {loading && <ActivityIndicator color="white" />}
    </View>
    {/* <ControlLayout {...controlProps} /> */}
  </View>
);

const fluid = {position: 'absolute', left: 0, right: 0, bottom: 0, top: 0};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
    backgroundColor: 'black',
  },
  videoWrapper: {...fluid},
  video: {...fluid},
  overlay: {
    ...fluid,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerLayout;
