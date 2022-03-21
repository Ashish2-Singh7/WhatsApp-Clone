import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../Global'
import { useNavigation } from '@react-navigation/native'


const NewMessage = () => {
    const Navigaton = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { Navigaton.navigate('Contacts') }}>
                <MaterialCommunityIcons name='message-reply-text' size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WhatMainColor.color,
        width: 70,
        height: 70,
        zIndex: 3,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        right: 20
    }
})