import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../ChatListItem/ChatScreen'
import Page2 from '../Page 2/Page2';
import colors from '../Global';

export default function Home() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "#FFF",
            style:{
                backgroundColor: colors.WhatMainColor.color,
            },
            indicatorStyle:{
                backgroundColor: "#FFF",
                height: 4
            },
            labelStyle:{
                fontWeight: 'bold'
            },
            shadowIcon: true
        }}>
            <Tab.Screen name="Camera" component={Page2} options={{
                tabBarIcon: ({}) => <Fontisto name="person" color={"#1097e6"} size={18} />,
                tabBarLabel: ()=> null
                
        }} />
            <Tab.Screen name="Chats" component={ChatScreen} />
        </Tab.Navigator>
    )
}