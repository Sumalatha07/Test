import React, {Profiler, useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native';
import { ProfileScreen } from '../screen/Profile';
import Login from '../screen/Login';
import HomeScreen from '../screen/HomeScreen';
import AlbumScreen from '../screen/Album';



const Stack = createStackNavigator(); 

export default function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Album'>
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Album" component={AlbumScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }