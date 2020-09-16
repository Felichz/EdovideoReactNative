import React from 'react';
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/edo-video-logo.png')}
      style={styles.logo}
    />
    <ActivityIndicator color="white" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Loader;
