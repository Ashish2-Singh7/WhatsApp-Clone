import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import colors from './components/Global';

import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ChatRoomScreen from './components/ChatRoom/ChatRoomScreen';
import Contacts from './components/Contacts/Contacts';

import SplashScreen from './components/SplashScreen/SplashScreen';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
        headerStyle: {
          backgroundColor: colors.WhatMainColor.color,
          shadowOpacity: 0,
          elevation: 0
        },
        headerTintColor: "#FFF",
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
        <Stack.Screen name="Home" options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{ flexDirection: "row", width: 60, justifyContent: 'space-between', marginRight: 10, marginVertical: 25 }}>
              <Octicons name='search' size={22} color={"white"} />
              <MaterialCommunityIcons name='dots-vertical' size={22} color={"white"} />
            </View>
          ),
        }} component={Home} />

        <Stack.Screen name='ChatRoom' component={ChatRoomScreen} options={({ route }) => ({
          title: route.params.chatName,
          headerRight: () => (
            <View style={{ flexDirection: "row", width: 100, justifyContent: 'space-between', marginRight: 10, marginVertical: 5 }}>
              <MaterialIcons name='call' size={22} color={"white"} />
              <FontAwesome5 name='video' size={22} color={"white"} />
              <MaterialCommunityIcons name='dots-vertical' size={22} color={"white"} />
            </View>
          )
        })} />

        <Stack.Screen name='Contacts' component={Contacts} options={{ title: "Contacts" }} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

