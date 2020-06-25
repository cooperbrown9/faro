import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {


    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch', height: 120, borderRadius: 8,
        backgroundColor: '#1b93cb',
        justifyContent: 'center', alignItems: 'center',
        marginBottom: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    text: {
        fontSize: 24, color: 'white', fontFamily: 'Bold'
    }
})