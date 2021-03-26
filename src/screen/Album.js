import { Text } from "react-native";

import { Button, View, FlatList, Image,StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function AlbumScreen({ navigation }) {

  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{

    fetchData();
  }, [])

  const fetchData=()=>{

    fetch("http://jsonplaceholder.typicode.com/photos?_start=1&_limit=10")
    .then((response) => response.json())
    .then((result) => {
     
      var res = [...albums, ...result];
      console.log("res", res);
      setAlbums(res);
    })
    .catch((err) => {

    })
 
   }

  const LoadMoreData = () =>{
    setCurrentPage(currentPage+1);
    fetchData();
    }

  const renderCustomItem = ({ item, index }) => {
    return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text>{item.title}</Text>
    <Image source={{ uri: item.url }} style={{width:100,height:100}} />
    </View>
    )
    }

    return (
      <View style={styles.container}>

        <FlatList
data={albums}
renderItem={renderCustomItem}
style={styles.image}
onEndReachedThreshold={0}
onEndReached={LoadMoreData}
keyExtractor={(item, index) => item.id}
ListFooterComponent={() => (
  <View style={{marginBottom:(300)}} />
)}
/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
      borderColor:'gray',
      borderWidth:10
    },
    text : {
      fontSize:15,
      margin:20
    },
    image :{ 
      width: 350, height: 800
    }
  })