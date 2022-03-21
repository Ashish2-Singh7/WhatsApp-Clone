import { StyleSheet, Text, View, Dimensions, TouchableOpacity,TextInput } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) =>{ 
          console.log(authUser) 
          if(authUser){
              navigation.replace('Home')
          }
      });
      return unsubscribe;
    }, [])

    const singInW = ()=>{
        auth.signInWithEmailAndPassword(email, password).catch((error)=> {alert(error)})
    }
    
    const [pasVisibility, setPasVisibility] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                        <FontAwesome 
                        name='user-o'
                        color="#05375a"
                        size={20}
                        />
                        <TextInput 
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        />
                        <Feather
                        name="check-circle"
                        color="green"
                        size={20} 
                        />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Passowrd</Text>
                <View style={styles.action}>
                        <FontAwesome 
                        name='lock'
                        color="#05375a"
                        size={20}
                        />
                        <TextInput 
                        placeholder='Your Password'
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={pasVisibility ? false : true}
                        />
                        <Feather
                        onPress={()=>{setPasVisibility(!pasVisibility)}}
                        name= {pasVisibility ? "eye" : "eye-off"}
                        color="green"
                        size={20} 
                        />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity  style={styles.signIn} onPress={()=>{singInW()}}>  
                    <LinearGradient
                        colors={['#14f341', '#24f341']}
                        style={styles.signIn}
                    >
                            <Text style={styles.textSign} >Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} style={[styles.signIn, {borderColor: "#009387", borderWidth: 1, marginTop: 15}]}>
                        <Text style={[styles.textSign, {color: "#009387"}]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.note}>If you are unable to login. Check if there any blank spaces in the input If they are then remove them</Text>
            </View>
        </View>
    )
}

export default SignIn

const { height } = Dimensions.get("screen");
const height_logo = height * 1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C6157",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text_header: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        alignItems: "center",
        paddingBottom: 5
    },
    textInput:{
        flex: 1,
        marginTop: 1 ,
        paddingLeft: 10,
        color: "#05375a"
    },
    note:{
        flex: 1,
        marginTop: 100 ,
        paddingLeft: 10,
        color: "#0091f7",
        alignSelf: "center",
        fontWeight: "bold"
    },
    button:{
        alignItems: 'center',
        marginTop: 50
    },
    signIn:{
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10
    },
    textSign:{
        fontSize:18,
        fontWeight: 'bold',
        color: "grey"
    }
})