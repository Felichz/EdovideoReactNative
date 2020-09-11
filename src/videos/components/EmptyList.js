import React from 'react';
import {Text, StyleSheet} from 'react-native';

const EmptyList = () => (
  <Text style={styles.text}>There are no suggestions at the moment</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default EmptyList;
