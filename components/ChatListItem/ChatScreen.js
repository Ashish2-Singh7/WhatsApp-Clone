import { View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import NewMessage from '../NewMessageButton/NewMessage'
import { db } from '../../firebase'

export default function ChatScreen({ navigation }) {

  const [chats, setChats] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

    return unsubscribe;
  }, [])


  return (
    <>
      <View>
        <ScrollView style={{ height: "100%" }}>
          {chats.map(({ id, data: { chatName } }) => {
           return <Chat key={id} id={id} chatName={chatName} navigation={navigation} />
          })}
        </ScrollView>
      </View>
      <NewMessage />
    </>
  )
}