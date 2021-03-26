import { Text } from "react-native";


import { Button, View } from 'react-native';
import React, {useEffect} from 'react';
export function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{textAlign: 'center', marginTop: 300}}>
          My Profile
        </Text>
        <Button 
        onPress={() => navigation.goBack()}
        title="Go back home"
        />
      </View>
    );
  }