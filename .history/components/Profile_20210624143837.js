import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from '../styles/styles'

export default function InputChoose() {

  constructor(){
    super();
    this.state = {
    dataku: [],
  };
  }

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
              onChangeText={onChangeNumber}
              value={date}
              placeholder="num_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={date}
              placeholder="heur_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={date}
              placeholder="date_rdv"
              keyboardType="numeric"
            />
            <Button title='submit'
              color="grey"

              />

           </View>
     </View>
  );
}
