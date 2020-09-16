import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {selectMovie} from '../../redux/videoDuck';
import API from '../../utils/api';

const Search = ({dispatch}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async () => {
    const movie = await API.searchMovie(searchValue);

    selectMovie(dispatch, movie);
  };

  return (
    <TextInput
      autoCorrect={false}
      autoCapitalize={'none'}
      placeholder="Search for your favorite movie"
      onSubmitEditing={handleSubmit}
      onChangeText={setSearchValue}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect()(Search);
