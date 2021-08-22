import React, { useState, useEffect} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';

export default function getList() {

//   constructor(props){
//     super(props);
//     this.state = { 
//         isLoading: true,
//         dataSource: [] // Add this line
//     }
// }

    const [renderItem, setRenderItem] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/getticket").then((response) => {
        setRenderItem(response.data);
      });
    }, []);

  // render(){

  //   if(this.state.isLoading){
  //     return(
  //       <View style={{flex: 1, padding: 20}}>
  //         <ActivityIndicator/>
  //       </View>
  //     )
  //   }

  return (
    <View  >
    <Text >
      Les Rendez-vous :
    </Text>
    //////////
    <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.renderItem}
          renderItem={({item}) =>  <Text>{item.num_rdv}, {item.heure_rdv}, {item.date_rdv}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    /////////
      {/* <FlatList
    // data={this.state.users}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =>
      <View style={styles.flatview}>
        <Text style={styles.rdv}>{item.num_rdv}</Text>
        <Text style={styles.rdv}>{item.heure_rdv}</Text>
        <Text style={styles.rdv}>{item.date_rdv}</Text>
        
      </View>
      }
    //   keyExtractor={item => item.email}
    /> */}
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





