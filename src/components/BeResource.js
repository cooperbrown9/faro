import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import Close from '../elements/close';
import Header from '../elements/header';
import RadioButton from '../elements/radio-button';

const FRAME = Dimensions.get('window')

const BeResource = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [resources, setResources] = useState([])
    // const [name, setName] = useState('')

    // inputFactory = (placeholder, value, update)

    useEffect(() => {
        console.log(resources)
    })

    return(
        <View style={styles.container}>
            <Header title={'Become a Resource'} />

            <View style={{height: 140}}/>

            <View style={styles.inputContainer}>
                <TextInput placeholder={'Name'} placeholderTextColor={'rgb(150, 150,150)'} style={styles.input} spellCheck={false} autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setName(text)}/>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput placeholder={'Email'} placeholderTextColor={'rgb(150, 150,150)'} style={styles.input} spellCheck={false} autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setEmail(text)}/>
            </View>
            
            <View >
                <RadioButton update={(resources) => setResources(resources)}/>
            </View>

            <Close onPress={props.onClose} />

            <View style={{position: 'absolute', right: 16, width: 200, bottom: 16}}>
                <TouchableOpacity onPress={props.onClose} style={styles.submit}>
                    <Text style={styles.submitButton}>Submit</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(200,200,200)', alignItems: 'center'
    },
    inputContainer: {
        height: 80, width: FRAME.width - 32, justifyContent: 'center', alignItems: 'stretch'
    },
    input: {
        flex: 1, fontFamily: 'Bold', fontSize: 24, paddingHorizontal: 16, tintColor: 'gold', color: '#002f6c', marginBottom: 8,
        borderBottomColor: '#002f6c', borderBottomWidth: 2
    },
    submit: {
        backgroundColor: 'gold', height: 64, borderRadius: 4, justifyContent: 'center'
    },
    submitButton: {
        fontSize: 24, color: 'white',  textAlign: 'center', fontFamily: 'Bold'
    }
})

export default BeResource