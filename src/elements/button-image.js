import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonImage({ title, onPress, uri }) {


    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            <Image style={styles.img} source={{ uri }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch', height: 100, borderRadius: 8,
        backgroundColor: 'rgb(220,220,220)',//'#1b93cb',
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
        fontSize: 24, color: 'rgb(20,59,97)', fontFamily: 'Bold'
    },
    img: {
        height: 48, width: 48//, tintColor: 'rgb(20,59,97)'
    }
})