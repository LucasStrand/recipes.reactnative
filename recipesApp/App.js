/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from './src/Constants/Colors';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./assets/Images/background.png')}>
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('./assets/Images/taste-logo.png')}
            />
          </View>
          <View>
            <Text style={styles.title}>Welcome back, Lucas!</Text>
            <Text style={styles.subTitle}>Ready for more taste?</Text>
          </View>
          <View style={styles.popularContainer}>
            <Text>Popular Recipes</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
  },
  title: {
    color: Colors.mainOrange,
    fontSize: 24,
    fontFamily: 'Urbanist-Regular',
    padding: 10,
  },
  subTitle: {
    flexDirection: 'row',
    color: Colors.mainOrange,
    fontSize: 16,
    fontFamily: 'Urbanist-Light',
    paddingLeft: 80,
  },
  popularContainer: {
    marginTop: 50,
  },
});

export default App;
