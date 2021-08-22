import React, { useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default function getList() {

  const [item, setRenderItem] = useState([]);

  useEffect(() => {
    axios.get('http://172.16.8.181:8080/getrdv')
    .then(async function (response) {
      setRenderItem(response.data);
  })
  .catch(function (error) {
      console.log(error)
  })
  }, []);

  return (
    <View  >
    <Text >
      Les Rendez-vous :
    </Text>
   
    <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={item.rdvs}
          renderItem={({renderItem}) =>  
          <Text>
            {item.num_rdv},
            {/* {item.heure_rdv},
            {item.date_rdv} */}
            </Text>}
          keyExtractor={({id}, index) => id}
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





