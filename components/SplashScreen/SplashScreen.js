import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import whatsapp from '../app-assets/whatsapp-logo.png'
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={whatsapp}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay Connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={()=>{navigation.navigate('SignIn')}} >
                    <LinearGradient
                        colors={['#14f341', '#24f341']}
                        style={styles.signIn}
                    ><Text style={styles.textSign}>Get Started</Text></LinearGradient>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplashScreen

const { height } = Dimensions.get("screen");
const height_logo = height * 1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C6157",
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    }
})