import { StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, {useState } from 'react'
import { FontAwesome5,Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { auth, db } from '../../firebase'
import { useRoute } from '@react-navigation/native'
import firebase from 'firebase/compat/app';
import { Alert } from 'react-native'


const InputBox = () => {

    const route = useRoute()
    const sendMessage = ()=>{
        Keyboard.dismiss();
        if(input.length > 0){
            db.collection('chats').doc(route.params.id).collection('messages').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
            })
            setInput("")
        }
        else{
            Alert.alert("Write Something Bro !")
        }

    }


    const [input, setInput] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"  />
                <TextInput multiline value={input} onChangeText={setInput} style={styles.textInput} placeholder="Type a message" />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
               {!input && <Fontisto name="camera" size={24} color="grey" />}
            </View>
            <TouchableOpacity onPress={()=>{sendMessage()}}>
            <View style={styles.butonContainer}>
                <MaterialIcons name="send" size={24} color="white"  />
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 25,
        padding: 10,
        borderRadius: 50,
        marginRight:10,
        flex: 1,
        alignItems: "center"
    },
    butonContainer:{
        backgroundColor: "#0C6157",
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput:{
        flex: 1 ,
        marginHorizontal: 10,

    },
    icon:{
        marginHorizontal: 5
    }

})