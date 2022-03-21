import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const SignUp = ({ navigation }) => {
    const [UserName, setUserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    
    const signup = ()=>{
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName: UserName,
            })
        })
        .catch((error) => console.warn(error))
    }

    const [pasVisibility, setPasVisibility] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Create Your Account !</Text>
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
                        onChangeText={setemail}
                    />
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Passowrd</Text>
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
                        secureTextEntry={pasVisibility ? false : true}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <Feather
                        onPress={() => { setPasVisibility(!pasVisibility) }}
                        name={pasVisibility ? "eye" : "eye-off"}
                        color="green"
                        size={20}
                    />
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user'
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder='Name'
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={UserName}
                        onChangeText={setUserName}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity  style={styles.signIn} onPress={() => { signup() }}>
                        <LinearGradient
                            colors={['#14f341', '#24f341']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign} >Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={[styles.signIn, { borderColor: "#009387", borderWidth: 1, marginTop: 15 }]}>
                        <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
                    </TouchableOpacity>
                </View> 
                <Text style={styles.note}>If you are unable to login. Check if there any blank spaces in the input If they are then remove them</Text>
            </View>
        </View>
    )
}

export default SignUp

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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        alignItems: "center",
        paddingBottom: 5
    },
    note:{
        flex: 1,
        marginTop: 10 ,
        paddingLeft: 10,
        color: "#0091f7",
        alignSelf: "center",
        fontWeight: "bold"
    },
    textInput: {
        flex: 1,
        marginTop: 1,
        paddingLeft: 10,
        color: "#05375a"
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "grey"
    }
})