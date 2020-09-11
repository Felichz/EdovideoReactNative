import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Suggestion from '../components/Suggestion';
import EmptyList from '../components/EmptyList';
import ListItemSeparator from '../components/ListItemSeparator';

const SuggestionList = ({list}) => {
  const renderItem = ({item}) => <Suggestion {...item} key={item.id} />;

  return (
    <Layout title="Recommended for you">
      <FlatList
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Layout>
  );
};

export default SuggestionList;
