import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserButton({ title, products, phone, onPress }) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text} allowFontScaling={false}>{title}</Text>
            <Text style={styles.products} allowFontScaling={false}>{products}</Text>
            <Text style={styles.products} allowFontScaling={false}>{phone}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 100, borderRadius: 8,paddingTop: 8, paddingBottom: 8,
        backgroundColor: 'rgb(220,220,220)',//'#1b93cb',
        justifyContent: 'center', alignItems: 'stretch',
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
        flex: 1,fontSize: 24, color: 'rgb(20,59,97)', fontFamily: 'Bold', paddingLeft: 16
    },
    products: {
        fontSize: 18, color: 'rgb(20,59,97)', fontFamily: 'Bold', paddingLeft: 16
    },
})