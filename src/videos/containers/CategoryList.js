import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../components/CategoryListLayout';
import Category from '../components/Category';
import EmptyList from '../components/EmptyList';
import ListItemSeparator from '../components/ListItemSeparator';

const CategoryList = ({list}) => {
  const renderItem = ({item}) => (
    <Category genre={item.genre} image={item.image} />
  );

  const keyExtractor = (item) => item.id + '';

  return (
    <Layout title="Categories">
      <FlatList
        horizontal
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <ListItemSeparator horizontal />}
      />
    </Layout>
  );
};

const mapState = (state) => ({list: state ? state.categoryList : []});

export default connect(mapState)(CategoryList);
