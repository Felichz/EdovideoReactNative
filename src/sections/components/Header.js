import React from 'react';
import {View, SafeAreaView, Image, StyleSheet} from 'react-native';

const Header = ({children, align = 'center'}) => {
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
      alignItems: align,
    },
  });

  return (
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
};

export default Header;
