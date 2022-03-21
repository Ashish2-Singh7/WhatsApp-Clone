import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import bg from '../../assets/back.png'
import InputBox from './InputBox'
import { db, auth } from '../../firebase'

const ChatRoomScreen = () => {
    const route = useRoute()


    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unsubscribe = db
            .collection("chats")
            .doc(route.params.id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                ))

        return unsubscribe

    }, [route])


    return (
        <ImageBackground style={{ width: "100%", height: "100%" }} source={bg}>
            <ScrollView contentContainerStyle={{padding: 15}} >
                {messages.reverse().map(({ id, data }) =>
                    data.email === auth.currentUser.email ? (
                        <View key={id} style={styles.messager}>
                            <Text style={{ color: "#000" }}>{data.message}</Text>
                        </View>
                    ) : (

                        <View key={id} style={styles.reciever}>
                            <Text style={{ color: "#000" }}>{data.message}</Text>
                            <Text style={{ color: "grey", alignSelf: 'flex-end', fontWeight: "100", position: 'absolute', bottom: 10, right: 10, fontWeight: "bold" }}>{data.displayName}</Text>
                        </View>
                    )

                )}
            </ScrollView>
            <InputBox id={route.params.id} />
        </ImageBackground>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    messager: {
        backgroundColor: '#DCF8C5',
        marginLeft: 100,
        borderRadius: 5,
        marginVertical: 10,
        padding: 10,
        borderBottomRightRadius: 0
    },
    reciever: {
        backgroundColor: 'white',
        marginLeft: 5,
        width: 240,
        height: 70,
        marginVertical: 10,
        marginRight: 0,
        borderRadius: 5,
        padding: 10,
        borderBottomLeftRadius: 0
    },
})