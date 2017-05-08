import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default class UnyuBtn extends Component {
  constructor() {
    super();
    
    this.animasi = new Animated.Value(0);
    this.handlePress = this.handlePress.bind(this);
  }
  
  animasiHelper(obj, toValue, duration) {
    Animated.timing(
      obj, {
        toValue,
        duration
      }  
    ).start();
  }
  
  handlePress() {
    this.animasiHelper(this.animasi, 1, 100);

    setTimeout(() => {
      this.animasiHelper(this.animasi, 0, 100);
    }, 100)
  }
  
  render() {
    const unyuer = this.animasi.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    });
    
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.handlePress} style={styles.container}>
        <View style={styles.btn1}/>
        <Animated.View style={[styles.btn2, { transform: [ { translateY: unyuer } ] }]}>
          <Text style={styles.text}>Jombloer!</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 110,
  },
  btn1: {
    top: 10,
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -100,
    backgroundColor: '#ccc',
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  }
});