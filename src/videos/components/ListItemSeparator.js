import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListItemSeparator = ({color, horizontal = false}) => {
  const styles = StyleSheet.create({
    separator: horizontal
      ? {
          marginHorizontal: 5,
        }
      : {
          marginVertical: 5,
          borderTopWidth: 1,
          borderColor: color || '#AAA',
        },
  });

  return <View style={styles.separator} />;
};

export default ListItemSeparator;
