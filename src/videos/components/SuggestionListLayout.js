import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const SuggestionListLayout = ({title, children}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 8,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SuggestionListLayout;
