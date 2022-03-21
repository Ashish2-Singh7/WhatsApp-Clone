import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { TouchableWithoutFeedback } from 'react-native'

const Chat = ( { id, chatName, navigation}) => {

    const [chatMessages, setChatMessages] = useState([])

    useEffect(() => {
      const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot)=> 
      setChatMessages(snapshot.docs.map((doc) => doc.data())));

      return unsubscribe;

    }, []);

    

    return (
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate('ChatRoom', {id: id, chatName: chatName})   
            }}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBVljb5Q8R72Sn1LiRsb-QiM4-4Pc2F7l1Q&usqp=CAU"}} style={styles.avatar} />

                <View style={styles.midContainer}>
                    <Text style={styles.userName}>{chatName}</Text>
                    <Text style={styles.lastMessage}>{`${chatMessages?.[0]?.displayName ? chatMessages?.[0]?.displayName : ''} ${chatMessages?.[0]?.message ? ':' : ''} ${chatMessages?.[0]?.message ? chatMessages?.[0]?.message : ''}`}</Text>
                </View>

            </View>
        </View>
     </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    userName: {
        color: "#121212",
        fontWeight: "bold"
    },
    lastMessage: {
        color: "grey"
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    time: {
        fontSize: 14,
        color: 'grey'
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
})

export default Chat
