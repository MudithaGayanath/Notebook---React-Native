import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from 'react-native'

export default function SignIn() {

    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    function loginProcess() {
        console.log("Clicked");
        console.log("email : "+email);
        console.log("password : "+password);

    }
    return (
        <ScrollView style={styels.container}>
            {/* Head start */}
            <View style={styels.headerContainer}>
                {/* logo start */}
                <View style={styels.logo}>
                    <Text style={styels.logoText}>Hello</Text>
                </View>
                {/* logo end */}

                {/* title section start */}
                <View>
                    <Text style={styels.title}>Notebook</Text>
                </View>
                {/* title section end */}

                {/* sub title section start */}
                <View>
                    <Text style={styels.subTitle}>Welcome back! Please sign in to your account</Text>
                </View>
                {/* sub title section end */}
            </View>
            {/* Head end */}

            {/* form start */}
            <View style={styels.formContainer} >
                <View style={styels.inputContainer}>
                    <Text style={styels.inputLable}>Email</Text>
                    <TextInput style={styels.input} value={email} onChangeText={(value)=>{setEmail(value)}} keyboardType='email-address' placeholder='Enter your email' ></TextInput>
                </View>
                <View style={styels.inputContainer}>
                    <Text style={styels.inputLable}>Password</Text>
                    <TextInput style={styels.input} value={password} onChangeText={(value)=>{setPassword(value)}} placeholder='Enter your email'  secureTextEntry ></TextInput>
                </View>
            </View>
            {/* form end */}

            {/* buttons start */}
            <View style={styels.buttonContainer}>
                <Pressable style={styels.loginButton} onPress={loginProcess}>
                    <Text style={styels.loginButtonText}>Log In</Text>
                </Pressable>
                <Pressable style={styels.createAccountButton}>
                    <Text style={styels.createAccountButtonText}>Create Account</Text>
                </Pressable>
            </View>
            {/* buttons end */}
 
        </ScrollView>
    )
}

const styels = StyleSheet.create({
    container:{
        backgroundColor:"#f1ededff"
    },
    headerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45
    },
    logo: {
        backgroundColor: "#4A90E2",
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    logoText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    },
    title: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center"
    },
    subTitle: {
        color: "gray",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 15,
        textAlign: "center"
    },
    formContainer: {
        flex: 1,
        marginTop:30,
        marginHorizontal:10
        
    },
    inputContainer:{
        paddingVertical:10,
        paddingHorizontal:20

    },
    inputLable:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10
    },
    input:{
        borderRadius:5,
        borderColor:"gray",
        borderWidth:0.5,
        paddingLeft:20,
        height:50,
        fontSize:15,
        backgroundColor:"white"
    },
    buttonContainer:{
        flex:1,
        marginHorizontal:20,
        marginVertical:10,
        gap:15
    },
    loginButton:{
        backgroundColor:"#4A90E2",
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    loginButtonText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },
    createAccountButton:{
        borderColor:"#4A90E2",
        borderWidth:2,
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    createAccountButtonText:{
        color:"#4A90E2",
        fontSize:15,
        fontWeight:"bold"
    }
})

