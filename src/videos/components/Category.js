import React from 'react';

import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Category = ({genre, image}) => (
  <ImageBackground style={styles.container} source={{uri: image}}>
    <View style={styles.darkBg} />
    <Text style={styles.genre}>{genre}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBg: {
    opacity: 0.2,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .5)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
  },
});

export default Category;
