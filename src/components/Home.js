import React, { Component } from 'react';
import axios from 'axios';

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import Detail from './Detail';

import Button from '../elements/button';
import ButtonImage from '../elements/button-image';
import Header from '../elements/header';
import HeaderImage from '../elements/header-image';
import UsersNearYou from './UsersNearYou';

// import data from '../../data/screens.json';

const BLUE = '#01579b'
const DATA = 'https://faroassist-database.s3.us-east-2.amazonaws.com/faroapp/faroapp-ps/xml/faroapp-layout.json';
// CONST ABCD = 'https://faroassist-database.s3.us-east-2.amazonaws.com/faroapp/faroapp-ps/xml/faroapp-layout.json';


class Home extends Component {

    state = {
        panels: [],
        panelToPresent: null,
        detailPresented: false,
        usersNearYouPresented: false
    }

    componentDidMount() {
        // console.log('yup', data)
        // this.setState({ panels: data.panel })
        this.loadData()
    }


    loadData() {
        axios.get(DATA, { headers: {
                'Cache-Control': 'max-age=1'
            }}).then((data) => {

            this.setState({ panels: data.data.panel })
        }).catch(e => console.log(e))
    }

    onSelect = (panel) => {
        console.log(panel)
        if(!panel.tile) {
            // this.setState({ detailPresented: true, panelToPresent: panel })
            return
        }
        // if(panel.title.toLowerCase().includes('users in')) {
            // return this.setState({ usersNearYouPresented: true, panelToPresent: panel })
        // }

        this.setState({ detailPresented: true, panelToPresent: panel })
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderImage title={'FARO Inc.'} />
                <ScrollView style={{ flex: 1, padding: 32, backgroundColor: 'transparent' }}>
                    {(this.state.panels.map((p, i) => {
                        return(
                        <Button title={p.title} icon={p.icon} key={i} onPress={() => this.onSelect(p)} />
                    )}))}

                </ScrollView>

                <Modal animationType={'slide'} visible={this.state.detailPresented}>
                    <Detail panel={this.state.panelToPresent} onClose={() => this.setState({ detailPresented: false })} />
                </Modal>
                
                {/* <Modal animationType={'slide'} visible={this.state.usersNearYouPresented}>
                    <UsersNearYou panel={this.state.panelToPresent} onClose={() => this.setState({ usersNearYouPresented: false })} />
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


export default Home;