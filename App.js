import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';

import Home from './src/components/Home';

// import Navigator from './src/nav/navigator';

export default class App extends Component {


  state = {
    isReady: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Regular': require('./assets/Roboto-Regular.ttf'),
      'Bold': require('./assets/Roboto-Bold.ttf')
    })
    this.setState({ isReady: true })
  }

  render() {
    if(!this.state.isReady) {
      return( 
        <View style={{flex: 1, backgroundColor: 'blue' }}>

        </View>
      )
    }
    return (
      <Home />
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
