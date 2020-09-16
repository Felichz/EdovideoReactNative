import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import {selectMovie} from '../../redux/videoDuck';
import Layout from '../components/SuggestionListLayout';
import Suggestion from '../components/Suggestion';
import EmptyList from '../components/EmptyList';
import ListItemSeparator from '../components/ListItemSeparator';

const SuggestionList = ({list, dispatch}) => {
  function viewMovie(movie) {
    selectMovie(dispatch, movie);
  }

  const renderItem = ({item}) => (
    <Suggestion {...item} onPress={() => viewMovie(item)} />
  );

  const keyExtractor = (item) => item.id + '';

  return (
    <Layout title="Recommended for you">
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Layout>
  );
};

const mapState = (state) => ({list: state ? state.suggestionList : []});

export default connect(mapState)(SuggestionList);
