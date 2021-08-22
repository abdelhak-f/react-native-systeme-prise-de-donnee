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
    <Text  >
      Les Rendez-vous :
    </Text>
   
    <View style={style.container}>
         <FlatList
          data={render}
          keyExtractor={(item ) => item.id}
          renderItem={({item}) =>  (
            <View>
              <Text style={style.h2text}>{item.num_rdv}          </Text>
              <Text style={style.h2text}>{item.heure_rdv}</Text>
              {/* <Text style={style.h2text}>{item.heure_rdv}</Text> */}
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
      // marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 26,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    rdv: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });
 





