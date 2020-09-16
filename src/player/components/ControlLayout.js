import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TogglePlayButton from './TogglePlayButton';
import FullscreenButton from './FullscreenButton';

const ControlLayout = ({
  togglePlay,
  paused,
  toggleFullscreen,
  inFullscreen,
}) => (
  <View style={styles.container}>
    <TogglePlayButton togglePlay={togglePlay} paused={paused} />
    <Text style={styles.white}> | Progress bar | </Text>
    <Text style={styles.white}>Time Left | </Text>
    <FullscreenButton
      toggleFullscreen={toggleFullscreen}
      inFullscreen={inFullscreen}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  white: {
    color: 'white',
  },
});

export default ControlLayout;
