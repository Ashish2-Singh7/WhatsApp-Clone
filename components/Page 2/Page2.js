import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import whatsapp from '../app-assets/feed.png'
import { auth } from '../../firebase';

const Page2 = ({ navigation }) => {
  
  const [userName, setUserName] = useState('none')
  const signOutUser = () => {
    auth.signOut().then(() => { navigation.replace("SignIn") })
  }

  setTimeout(() => {
    setUserName(auth.currentUser.displayName)
  }, 1000);

  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={whatsapp}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
          <Text style={styles.title}>{`Welcome ${userName=='' ? "loading.." : userName} !`}</Text>
          <Text style={styles.ndtitle}>Your Feedback Helps.</Text>
          <Text style={styles.tdtitle}>End to End encrypted just like whatsapp </Text>
        <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 30 }} onPress={() => { signOutUser() }} >
            <LinearGradient
              colors={['#0082c8', '#0575E6']}
              style={styles.signIn}
            ><Text style={styles.textSign}>Sign Out</Text></LinearGradient>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page2


const { height } = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  footer: {
    height: 400,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#0C6157",
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  title: {
    color: '#05375a',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  ndtitle: {
    color: '#05375a', 
    alignSelf: 'center',
    fontSize: 19,
    fontWeight: 'bold'
  },
  tdtitle: {
    color: 'grey', 
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
})