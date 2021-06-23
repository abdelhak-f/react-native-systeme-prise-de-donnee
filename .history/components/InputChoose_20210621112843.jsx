import React from 'react';
import { View, Text } from 'react-native';

export default function InputChoose() {
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
              onChangeText={onChangeText}
              placeholder="Entre LastName"
              value={text}
           />
            <Text >Slect Date :</Text>
            <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={date}
              placeholder="select date"
              keyboardType="numeric"
            />
          
         </View>
     </View>
  );
}
