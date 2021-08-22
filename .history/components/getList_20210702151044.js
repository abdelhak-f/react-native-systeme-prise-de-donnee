import React, { useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
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
    <Text style={{backgroundColor: 'red'}} >
      Les Rendez-vous :
    </Text>
   
    <View
    //  style={{flex: 1, paddingTop:20}}
    >
        {/* <FlatList
          data={render}
          keyExtractor={(item ) => item.id}
          renderItem={({item}) =>  (
            <View><Text style={{backgroundColor: 'red'}}>{item.num_rdv}</Text>
            <Text style={{backgroundColor: 'green'}}>{item.heure_rdv}</Text>

            <Text style={{backgroundColor: 'yellow'}}>{item.heure_rdv}</Text>
            </View>
          
            )}
          
        /> */}
        {/* <FlatList
          data={render}
          keyExtractor={(item ) => item.id}
          renderItem={({item}) =>  (
           
          <View></View>
          
            )}
          
        /> */}
        <FlatList
          data={render}
          keyExtractor={(item ) => item.id}
          renderItem={({item}) =>  (
            <View>></View>
          
            )}
          
        />
      </View>
   </View>
   )
  

  //   const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: 50,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#F5FCFF',
  //   },
  //   h2text: {
  //     marginTop: 10,
  //     fontFamily: 'Helvetica',
  //     fontSize: 36,
  //     fontWeight: 'bold',
  //   },
  //   flatview: {
  //     justifyContent: 'center',
  //     paddingTop: 30,
  //     borderRadius: 2,
  //   },
  //   rdv: {
  //     fontFamily: 'Verdana',
  //     fontSize: 18
  //   },
  //   email: {
  //     color: 'red'
  //   }
    
  // });
 }





