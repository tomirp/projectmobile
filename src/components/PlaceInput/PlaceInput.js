import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class PlaceInput extends Component{

    state = {
        placeName:''
    }

    placeNameChangeHandler =(val)=> {
        this.setState({placeName: val})
    }
    
    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = 'An Awesome Place'
                    onChangeText = {this.placeNameChangeHandler}
                    style={styles.placeInput}/>
                <Button 
                    style={styles.button} title= 'Add'
                    onPress/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center'

    },
    PlaceInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
})


export default PlaceInput