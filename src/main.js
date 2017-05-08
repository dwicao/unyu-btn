import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

class UnyuBtn extends React.Component {
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
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={this.handlePress}>
          <View style={styles.btn1}/>
          <Animated.View style={[styles.btn2, { transform: [ { translateY: unyuer } ] }]}>
            <Text style={styles.text}>Jomblo!</Text>
          </Animated.View>
        </TouchableOpacity>
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
  btn1: {
    backgroundColor: 'gray',
    width: 100,
    height: 80,
    borderRadius: 20,
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -90,
    backgroundColor: '#ccc',
    width: 100,
    height: 80,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  }
});

export default UnyuBtn;
