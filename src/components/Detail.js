import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Modal, Image, RefreshControl } from 'react-native';
import { WebView } from 'react-native-webview';


import Button from '../elements/button';
import ButtonImage from '../elements/button-image';
import Header from '../elements/header';
import Close from '../elements/close';
import BeResource from './BeResource';
import UsersNearYou from './UsersNearYou';
import ZipCode from './ZipCode';

import { getZip, setZip } from '../api/local';


function Detail({ panel: _panel, onClose, onRefresh: _onRefresh }) {

    const [panel, setPanel] = useState(_panel)
    const [isRefreshing, setRefresh] = useState(true)
    const [panelPresent, present] = useState({ isPresented: false, uri: '' })
    const [formPresented, presentForm] = useState(false)
    const [usersNearYou, presentUsersNearYou] = useState(false)
    let g = {}

    function isUsersNearYou() {
        if (panel.title.toLowerCase().includes('users in your area')) {
            return (
                <Button title={'Users Near You'} onPress={() => presentUsersNearYou(true)} />
            )
        }
    }

    function refresh() {
        // setRefresh(true)
        _onRefresh(panel.title, (newPanel) => {
            console.log('refresh')
            if (!newPanel) {
                console.log('ERROR')
                // error
                return setRefresh(false)
            }
            console.log('should work')
            setRefresh(true)
            setPanel(newPanel)
            setRefresh(true)
        })
        setRefresh(true)
    }
// refreshControl={<RefreshControl onRefresh={refresh} isRefreshing={isRefreshing} />}
    return (
        <View style={styles.container}>
            <Header title={panel.title} />

            <ScrollView
                style={{ flex: 1, padding: 32, backgroundColor: 'transparent' }}
                >
                {(!panel.tile.length)
                    ? <Button title={panel.tile.title} onPress={() => present({ isPresented: true, uri: panel.tile.link })} />
                    : (panel.tile.map((t, i) => (
                        <Button title={t.title} uri={t.icon} onPress={() => present({ isPresented: true, uri: t.link })} />
                    )))
                }

                {(panel.title.toLowerCase().includes('users in your'))
                    ? <Button title={'Become a Resource'} onPress={() => /*presentForm(true)*/ alert('Coming Soon!')} />
                    : null
                }

                {isUsersNearYou()}

            </ScrollView>

            <Close onPress={onClose} />

            {/* {(panel.title.toLowerCase().includes('users in your'))
                ? <Modal animationType={'slide'} visible={formPresented}>
                    <BeResource onClose={() => presentForm(false)} />
                </Modal>
                : null
            } */}


            <Modal animationType={'slide'} visible={usersNearYou}>
                <UsersNearYou onClose={() => presentUsersNearYou(false)} />
            </Modal>

            <Modal animationType={'slide'} visible={panelPresent.isPresented}>
                <View style={{ flex: 1 }}>
                    <WebView source={{ uri: panelPresent.uri }} />
                    <Close onPress={() => present({ isPresented: false, uri: '' })} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(220,220,220)'
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