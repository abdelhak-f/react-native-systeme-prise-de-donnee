import React, {useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import {styles} from '../styles/styles'

export default function InputChoose() {

  // constructor(){
  //   super();
  //   this.state = {
  //   dataku: [],
  // };
  // }
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  function addrdv(){
    var url = 'http://172.16.8.181:3210/postrdv';
    axios.post(url, {
      num_rdv: input1,
      heure_rdv: input2,
      date_rdv: input3
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // input1 = '';
    // input2 = '';
    // input3 = '';
  };

    const [text, onChangeText] = React.useState("");
    const [date, onChangeNumber] = React.useState(null);

  return (
    <View>
         <View >
      
           <Text style={styles.title}>Add in appointement</Text>
         </View>
         <View style={styles.input}>
          
         <TextInput
              style={styles.childinput}
              onChangeText={(input1) => setInput1(input1)}
              value={input1}
              placeholder="num_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={(input1) => setInput2({input2})}
              value={input2}
              placeholder="heur_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={(input1) => setInput3({input3})}
              value={input3}
              placeholder="date_rdv"
              keyboardType="numeric"
            />
            <Button title='submit'
              color="grey"
              onPress={ () => { addrdv() }}
              />

           </View>
     </View>
  );
}
