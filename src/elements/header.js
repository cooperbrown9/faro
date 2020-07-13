import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ title }) {

    return (
        <View style={[styles.header]}>
            <Text style={[styles.title, (title.length > 16) ? { fontSize: 32 } : null]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    title: {
        fontFamily: 'Bold', color: 'white', fontSize: 40,
        position: 'absolute', left: 12, bottom: 16, paddingRight: 16
    }
})