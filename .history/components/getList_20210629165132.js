import React, { Component} from 'react';
import { Text, View } from 'react-native';

function getList() {

    const [renderItem, setRenderItem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/getticket").then((response) => {
        setRenderItem(response.data);
    });
  }, []);

  return (
    <View style={styles.container} >
    <Text style={styles.h2text}>
      Black Order
    </Text>
      <FlatList
    //data={this.state.users}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =>
      <View style={styles.flatview}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      }
      keyExtractor={item => item.email}
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
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    }
    
  });

export default getList



