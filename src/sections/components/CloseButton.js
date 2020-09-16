import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import {selectMovie} from '../../redux/videoDuck';

const CloseButton = ({dispatch}) => {
  const [pressed, setPressed] = useState(false);

  function onPress() {
    selectMovie(dispatch, null);
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#333"
      onShowUnderlay={() => setPressed(true)}
      onHideUnderlay={() => setPressed(false)}>
      {pressed ? (
        <Icon name="close" size={24} color="#EEE" />
      ) : (
        <Icon name="close" size={24} color="black" />
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    backgroundColor: '#DDD',
    borderRadius: 50,
    padding: 2.5,
  },
});

export default connect()(CloseButton);
