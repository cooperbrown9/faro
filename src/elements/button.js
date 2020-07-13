import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ title, onPress, uri = null }) {


    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text} allowFontScaling={false}>{title}</Text>
            {(uri) ?
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri }} />

                </View>
                : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', paddingHorizontal: 16,
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
        flex: 4, fontSize: 24, color: 'white', fontFamily: 'Bold'
    },
    imgContainer: {
        flex: 1
    },
    img: {
        height: 64, width: 64, tintColor: 'white'
    }
})