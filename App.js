import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/components/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './src/utils/api';

const App = () => {
  const [suggestionList, setSuggestionList] = useState([]);

  async function fetchData() {
    const movies = await API.getSuggestion(1);
    setSuggestionList(movies);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Home>
      <Header>
        <Text>Your favorite movie app</Text>
      </Header>
      <SuggestionList list={suggestionList} />
    </Home>
  );
};

export default App;
