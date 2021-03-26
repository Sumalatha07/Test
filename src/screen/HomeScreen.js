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

  export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        console.log("Home screen")
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
      container: {
          flex:1,
          justifyContent: 'center',
          alignItems:'center'
      }
  })