import React from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

const Suggestion = ({
  medium_cover_image: image,
  genres,
  title,
  year,
  rating,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: image}} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genres[1]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating} Stars</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  left: {},
  right: {paddingLeft: 10, justifyContent: 'space-evenly'},
  cover: {height: 150, width: 100, resizeMode: 'cover'},
  genre: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {color: 'white', fontSize: 11},
  title: {fontSize: 18, color: '#44546b'},
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {color: '#6b6b6b', fontSize: 14, fontWeight: 'bold'},
});

export default Suggestion;
