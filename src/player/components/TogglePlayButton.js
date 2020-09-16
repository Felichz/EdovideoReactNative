import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TogglePlayButton = ({togglePlay, paused}) => (
  <TouchableHighlight
    style={styles.container}
    underlayColor="white"
    onPress={togglePlay}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}>
    {paused ? (
      <Icon name="play-arrow" size={24} color="white" />
    ) : (
      <Icon name="pause" size={24} color="white" />
    )}
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'white',
    backgroundColor: 'transparent',
    opacity: 0.9,
  },
});
export default TogglePlayButton;
