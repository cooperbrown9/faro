import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ title, onPress, uri = null }) {

    console.log('URI', uri)
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {(uri) ?
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: uri }} />

                </View>
                : null
            }
            <Text style={styles.text} allowFontScaling={false}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', paddingRight: 16,
        alignSelf: 'stretch', height: 100, borderRadius: 8,
        backgroundColor: '#1b93cb',
        justifyContent: 'space-around', alignItems: 'center',
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
        flex: 3, fontSize: 24, color: 'white', fontFamily: 'Bold', paddingLeft: 16
    },
    imgContainer: {
        flex: 1, backgroundColor: 'green', padding: 12, borderBottomLeftRadius: 4, borderTopLeftRadius: 4
    },
    img: {
        tintColor: 'white', width: 'auto', height: '100%'
    }
})