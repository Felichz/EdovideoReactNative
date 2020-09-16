import React, {useRef, useEffect} from 'react';

import {Animated} from 'react-native';

const MovieFadein = ({children}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default MovieFadein;
