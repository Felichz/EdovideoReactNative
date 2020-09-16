import React from 'react';
import {connect} from 'react-redux';

import Player from '../../player/containers/Player';
import MovieFadein from '../components/MovieFadein';
import Header from '../../sections/components/Header';
import CloseButton from '../../sections/components/CloseButton';
import Details from '../../videos/components/Details';

const Movie = ({movie}) => {
  return (
    <MovieFadein>
      <Header align="flex-end">
        <CloseButton />
      </Header>
      <Player />
      <Details {...movie} />
    </MovieFadein>
  );
};

const mapState = ({selectedMovie}) => ({movie: selectedMovie});

export default connect(mapState)(Movie);
