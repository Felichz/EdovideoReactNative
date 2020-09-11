import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';

const Header = ({children}) => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/edo-video-logo-dark.png')}
          style={styles.logo}
        />
        <View style={styles.children}>{children}</View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  children: {
    flex: 1,
    marginTop: -3,
    alignItems: 'center',
  },
});

export default Header;
