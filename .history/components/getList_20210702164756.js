import React, { useState, useEffect} from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function getList() {

  const [render, setRenderItem] = useState([]);

  useEffect(() => {
    axios.get('http://172.16.8.181:8080/getRdv')
    .then(async function (response) {
      setRenderItem(response.data);
  })
  .catch(function (error) {
      console.log(error)
  })
  }, []);

  
  return (
    <View  >
    <Text style={style.title} >
      Les Rendez-vous :
    </Text>
   
    <View style={style.container}>
         <FlatList
          data={render}
          keyExtractor={(item ) => item.id}
          renderItem={({item}) =>  (
            <View>
              <Text style={style.h2text}>{item.num_rdv} {item.heure_rdv} {item.date_rdv}  </Text>
              {/* <Text style={style.h2text}>{item.heure_rdv}</Text>
              <Text style={style.h2text}>{item.date_rdv}</Text> */}
            </View>
          
            )}
            
        />
      </View>
   </View>
   )
   }  

    const style = StyleSheet.create({
    container: {
      // flex: 1,
      marginTop: 20,
      // justifyContent: 'center',
      // alignItems: 'center',
      
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 26,
      fontWeight: 'bold',
      backgroundColor: 'red',
      color: 'black'
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    title: {
      // justifyContent: 'center',
      paddingTop: 10,
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });
 





