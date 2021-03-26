import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
import HomeScreen from './HomeScreen';

//export default class Login extends Component{
    export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    onClickListener = (viewId) => {
    
        console.log("this.stae", this.state)
        if(viewId=='login'){
            if(this.state.email==null || this.state.email==undefined || this.state.email==""){
                Alert.alert("Alert", "Please enter email id");
            } else if(this.state.password==null || this.state.password==undefined){
                Alert.alert("Alert", "Please enter password");
            } else {
               // this.props.navigation.navigate(Profile)
              // console.log(" this.props.navigation",  this.props)
               this.props.navigation.navigate('Profile');
            }
        }
    }

  


    render(){

        return(
            <View style={style.container}>

                <View style={style.inputContainer}>
                    <Image style={style.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}></Image>
                    <TextInput style = {style.input}
                            placeholder="Email"
                            keyboardType="email-address"
                          
                            onChangeText={(email) => this.setState({email})}>
                    </TextInput>
                </View>

                <View style={style.inputContainer}>

                    <Image style={style.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}></Image>
                    <TextInput style={style.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}>
                    </TextInput>
                </View>

                <TouchableHighlight style={[style.buttonContainer, style.loginButton]}
                    onPress={() => this.onClickListener('login')}>
                    <Text style={style.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={style.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={style.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text>Register</Text>
                </TouchableHighlight>
            
            </View>
        );
    }

}



const style = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#DCDCDC"
    },
    inputContainer : {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    input : {
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1
    },

    inputIcon : {
        width : 30,
        height :30,
        marginLeft : 15,
        justifyContent:"center"
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      },
      loginText: {
        color: 'white',
      }
})