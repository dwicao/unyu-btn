import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import UnyuBtn from './src/main.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UnyuBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
