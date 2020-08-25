import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import Constants from 'expo-constants';

import Home from './src/components/Home';

import { getZip, setZip } from './src/api/local';
// import ZipCode from './src/components/ZipCode';

export default class App extends Component {


  state = {
    isReady: false,
    zip: null
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Regular': require('./assets/Roboto-Regular.ttf'),
      'Bold': require('./assets/Roboto-Bold.ttf')
    })

    // const zip = await getZip()

    // if(!zip) {
    //   return this.setState({ isReady: true, zip: zip })
    // }

    this.setState({ isReady: true })
  }

  onCompleteZip = async(zip) => {
    await setZip(zip)

    this.setState({ zip })
  }

  render() {
    if(!this.state.isReady) {
      return( 
        <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{Constants.manifest.version}</Text>
        </View>
      )
    }



    // if(!this.state.zip) {
    //   return(
    //     <ZipCode onComplete={this.onCompleteZip} />
    //   )
    // }

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
