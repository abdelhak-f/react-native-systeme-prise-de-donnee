import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {styles} from '../styles/styles'

export default function InputChoose() {

    const [text, onChangeText] = React.useState("");
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
           </View>
     </.View>
  );
}
