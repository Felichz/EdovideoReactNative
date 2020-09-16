import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

import Home from './src/screens/components/Home';
import Header from './src/sections/components/Header';
import Search from './src/sections/containers/Search';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import Movie from './src/screens/containers/Movie';

const AppView = ({selectedMovie}) =>
  selectedMovie ? (
    <Movie />
  ) : (
    <Home>
      <Header>
        <Text>Your favorite movie app</Text>
      </Header>

      <Search />

      <CategoryList />
      <SuggestionList />
    </Home>
  );

const mapState = ({selectedMovie}) => ({
  selectedMovie,
});

export default connect(mapState)(AppView);
