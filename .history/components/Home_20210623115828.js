import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from '../styles/styles'

export default function Home() {

    const [text, onChangeText, onChangeText1 ] = React.useState("");
    const [date, onChangeNumber] = React.useState(null);

  return (
    <View>
      <View >
      
           <Text style={styles.title}>Select in appointement</Text>
         </View>
         <View style={styles.input}>
           <Text >FirstName :</Text>
           <TextInput
              style={styles.childinput}
              onChangeText={onChangeText}
              placeholder="Enter FirstName"
              value={text}
           />
            <Text >Last Name :</Text>
           <TextInput
              style={styles.childinput}
              onChangeText={onChangeText1}
              placeholder="Entre LastName"
              value={text}
           />
            <Text >Slect RDV :</Text>
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
