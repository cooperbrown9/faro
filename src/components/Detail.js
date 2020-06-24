import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { WebView } from 'react-native-webview';


import Button from '../elements/button';
import Header from '../elements/header';
import Close from '../elements/close';


const BLUE = '#01579b'
function Detail({ panel, onClose }) {

    const [_panel, present] = useState({ isPresented: false, uri: '' })

    console.log(panel)
    return (
        <View style={styles.container}>
            <Header title={panel.title} />

            <ScrollView style={{ flex: 1, padding: 32, backgroundColor: 'transparent' }}>
                {(panel.tile.map((t, i) => (
                    <Button title={t.title} onPress={() => present({ isPresented: true, uri: t.link })} />
                )))}
            </ScrollView>

            <Close onPress={onClose} />

            <Modal animationType={'slide'} visible={_panel.isPresented}>
                <WebView source={{ uri: _panel.uri }}>
                    <Close onPress={() => present({ isPresented: false, uri: '' })}/>
                </WebView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
        position: 'absolute', left: 16, bottom: 32, height: 64, width: 64, borderRadius: 32,
        justifyContent: 'center', alignItems: 'center', zIndex: 10000, backgroundColor: '#002f6c'
    },
    close: {
        position: 'absolute', left: 16, bottom: 16, height: 64, width: 64,
        justifyContent: 'center',
        backgroundColor: '#ffd95b', zIndex: 10000
    }
})

export default Detail