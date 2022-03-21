import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

import { Entypo } from '@expo/vector-icons'
import { db } from '../../firebase'


const Contacts = ({ navigation }) => {

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.navigate('Home')
        }).catch((error) => { alert(error) })
    }

    const [input, setInput] = useState('')

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='Enter a chat name'
                    value={input}
                    onChangeText={(text) => { setInput(text) }}
                    style={styles.textInput}
                />
                <Entypo name="pencil" size={24} color="grey" style={styles.icon} />
            </View>
            <Pressable onPress={()=>{createChat()}} android_ripple={{color: "#f0f"}} style={styles.button}>
                <Text style={styles.text}>Create Chat</Text>
            </Pressable>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {  
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 5
    },
    textInput: {
        width: "100%",
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        marginHorizontal: 12,
        marginVertical: 12,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})