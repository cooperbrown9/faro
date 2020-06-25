import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Close({ onPress }) {


    return (
        <TouchableOpacity style={styles.back} onPress={onPress}>
            <Image style={styles.img} source={require('../../assets/back.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute', left: 16, bottom: 32, height: 64, width: 64, borderRadius: 32,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#002f6c', zIndex: 100
    },
    img: { 
        height: 32, width: 32, 
        tintColor: 'white' 
    }
})