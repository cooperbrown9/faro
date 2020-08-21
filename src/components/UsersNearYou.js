import React, { Component } from 'react';

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import Button from '../elements/button';
import UserButton from '../elements/user-button';
import Close from '../elements/close';
import ButtonImage from '../elements/button-image';
import Header from '../elements/header';
import HeaderImage from '../elements/header-image';


class UsersNearYou extends Component {

    state = {
        users: [],
        panelToPresent: null,
        detailPresented: false
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        const users = [
            { agency: 'Sanford PD', city: 'Sanford', state: 'FL', phone: '555-555-5555', contact: 'Detective Johnson', faro_products: 'Focus, Scene, FARO Zone 3D' },
            { agency: 'Heathrow PD', city: 'Heathrow', state: 'FL', phone: '555-555-5555', contact: 'Detective Smith', faro_products: 'Freestyle, FARO Zone 3D' },
            { agency: 'Winter Springs', city: 'Winter Springs', state: 'FL', phone: '555-555-5555', contact: 'Sgt. Jones', faro_products: 'Focus, ScanPlan, FARO Zone 3D' }
        ]
        this.setState({ users })
    }

    onSelect = (panel) => {
        console.log(panel)
        if (!panel.tile) {
            // this.setState({ detailPresented: true, panelToPresent: panel })
            return
        }
        this.setState({ detailPresented: true, panelToPresent: panel })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Users Near You'} />
                <ScrollView style={{ flex: 1, padding: 32, backgroundColor: 'transparent' }}>
                    {(this.state.users.map((u, i) => {
                        console.log('PANEL', u)
                        return (
                            <UserButton title={u.agency} products={u.faro_products} phone={u.phone} key={i} onPress={() => this.onSelect(u)} />
                        )
                    }))}

                </ScrollView>

                <Close onPress={this.props.onClose} />

                {/* <Modal animationType={'slide'} visible={this.state.detailPresented}>
                    <Detail panel={this.state.panelToPresent} onClose={() => this.setState({ detailPresented: false })} />
                </Modal> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(220,220,220)'
    },
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
        fontFamily: 'Arial', color: 'white', fontSize: 48, fontWeight: 'bold',
        position: 'absolute', left: 16, bottom: 16
    }
})


export default UsersNearYou;