import 'react-native-gesture-handler';
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { Text, View, TextInput } from 'react-native';
 import {styles} from './styles/styles'
 
 
 import { Calendar, LocaleConfig } from 'react-native-calendars'
 LocaleConfig.locales['fr'] = {
   monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
   monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
   dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
   dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
   today: 'Aujourd\'hui'
 }
 LocaleConfig.defaultLocale = "fr"
 const App = () => {

  const [text, onChangeText] = React.useState("");
  const [date, onChangeNumber] = React.useState(null);
 
   return (
     
     <>
     <View style={styles.countainer}>
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
           <Calendar/>
     </View>
        
     </>
 
   )
 }
 
 export default App; 