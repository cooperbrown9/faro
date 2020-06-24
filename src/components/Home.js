import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import Detail from './Detail';
import Button from '../elements/button';
import Header from '../elements/header';

import data from '../../data/screens.json';

const BLUE = '#01579b'
class Home extends Component {

    state = {
        panels: [],
        panelToPresent: null,
        detailPresented: false
    }

    componentDidMount() {
        console.log('yup', data)
        this.setState({ panels: data.panel })
    }

    onSelect = (panel) => {
        this.setState({ detailPresented: true, panelToPresent: panel })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'FARO Inc.'} />
                <ScrollView style={{ flex: 1, padding: 32, backgroundColor: 'transparent' }}>
                    {(this.state.panels.map((p, i) => (
                        <Button title={p.title} key={i} onPress={() => this.onSelect(p)} />
                    )))}

                </ScrollView>

                <Modal animationType={'slide'} visible={this.state.detailPresented}>
                    <Detail panel={this.state.panelToPresent} onClose={() => this.setState({ detailPresented: false })} />
                </Modal>
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


export default Home;