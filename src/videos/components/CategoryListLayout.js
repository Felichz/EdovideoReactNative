import React from 'react';

import {Text, StyleSheet, ImageBackground} from 'react-native';

const CategoryListLayout = ({title, children}) => (
  <ImageBackground
    style={styles.container}
    source={require('../../assets/background.png')}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoryListLayout;
