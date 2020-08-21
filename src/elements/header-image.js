import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function HeaderImage({ title }) {

    return (
        <View style={[styles.header]}>
            {/* <Text style={[styles.title, (title.length > 16) ? { fontSize: 32 } : null]} allowFontScaling={false}>{title}</Text> */}
            <Image style={{ height: styles.header.height - 40, width: width - 32 }} source={require('../../assets/logo.png')} resizeMode={'contain'} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 32,
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 180, backgroundColor: 'rgb(20,59,97)',//'#002f6c', //ffd95b
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