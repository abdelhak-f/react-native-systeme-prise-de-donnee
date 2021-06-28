import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from '../styles/styles'

export default function InputChoose() {

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
              placeholder="select RDV"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={date}
              placeholder="select RDV"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={date}
              placeholder="select RDV"
              keyboardType="numeric"
            />
            <Button title='submit'
              color="grey"

              />

           </View>
     </View>
  );
}
