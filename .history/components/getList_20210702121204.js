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

  /////
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
///////
  return (
    <View  >
    <Text style={{backgroundColor: 'red'}} >
      Les Rendez-vous :
    </Text>
   
    <View
    //  style={{flex: 1, paddingTop:20}}
    >
        <FlatList
          data={render}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) =>  (
          <Text style={{backgroundColor: 'red'}}>
            {item.num_rdv},
            {item.heure_rdv},
            {item.date_rdv}
            </Text>)}
          
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





