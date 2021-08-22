import React, { Component} from 'react';
import { Text, View, FlatList } from 'react-native';

export default class getList {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

    // const [renderItem, setRenderItem] = useState([]);
   componentDidMount()  {
   return fetch("http://172.16.8.181:8080/getrdv",  {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "********"
    }
   })
   .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  };

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

  return (
    <View style={styles.container} >
    <Text style={styles.h2text}>
      Les Rendez-vous :
    </Text>
      <FlatList
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
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
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

export default getList



