import React, { Component } from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';


import Button from '../elements/button';
import Header from '../elements/header';


class ZipCode extends Component {

    state = {
        zip: ''
    }

    componentDidMount() {
    }

    onComplete = () => {
        if (this.state.zip.length != 5) {
            return alert('invalid zipcode')
        }

        this.props.onComplete(this.state.zip)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                    <Header title={'Enter Zip Code'} />
                </View>

                <TextInput style={styles.input} keyboardType={'number-pad'} returnKeyType={'done'} placeholder={'99223'} onChangeText={(zip) => this.setState({ zip: zip })} />

                <View style={{ position: 'absolute', bottom: 16, left: 32, right: 32 }}>
                    <Button title={'Submit'} onPress={this.onComplete} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(220,220,220)',
        justifyContent: 'center'
    },
    header: {
        alignSelf: 'stretch',
        height: 140, backgroundColor: '#002f6c', //ffd95b
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    input: {
        height: 80, fontSize: 32, color: 'black', fontFamily: 'Bold', backgroundColor: 'white', borderRadius: 8,
        margin: 16, padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },  
    title: {
        fontFamily: 'Arial', color: 'white', fontSize: 48, fontWeight: 'bold',
        position: 'absolute', left: 16, bottom: 16
    }
})


export default ZipCode;