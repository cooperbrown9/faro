import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const RadioButton = (props) => {

    const [buttons, update] = useState([{
        title: 'FARO Stuff',
        selected: false
    }, {
        title: 'Software',
        selected: false
    }, {
        title: 'Other Product',
        selected: false
    }])

    const updateButton = (index) => {
        buttons[index].selected = !buttons[index].selected;
        const _buttons = [
            ...buttons
        ]
        update(_buttons)
        props.update(buttons.filter(b => b.selected))
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, (buttons[0].selected) ? { backgroundColor: '#002f6c'} : { backgroundColor: 'rgb(150,150,150)' } ]} onPress={() => updateButton(0)}>
                <Text style={styles.text}>{buttons[0].title}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, { backgroundColor: (buttons[1].selected) ? '#002f6c' : 'rgb(150,150,150)' }]} onPress={() => updateButton(1)}>
                <Text style={styles.text}>{buttons[1].title}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, { backgroundColor: (buttons[2].selected) ? '#002f6c' : 'rgb(150,150,150)' }]} onPress={() => updateButton(2)}>
                <Text style={styles.text}>{buttons[2].title}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 16
    },
    button: {
        height: 64, width: width - 32, justifyContent: 'center', alignItems: 'stretch', margin: 4, borderRadius: 4
    },
    text: {
        fontFamily: 'Bold', fontSize: 20, color: 'white', textAlign: 'center'
    }
})

export default RadioButton