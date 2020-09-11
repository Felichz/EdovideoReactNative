import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItemSeparator = ({color}) => {
  const styles = StyleSheet.create({
    separator: {
      borderTopWidth: 1,
      borderColor: color || '#eaeaea',
    },
  });

  return <View style={styles.separator} />;
};

export default ListItemSeparator;
