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
  const [number, onChangeNumber] = React.useState(null);
 
   return (
     
     <>
     <View style={styles.countainer}>
        <View >
           <Text style={styles.title}>Select in appointement</Text>
         </View>
         <View style={styles.input}>
           <Text >Name :</Text>
           <TextInput
              style={styles.childinput}
              onChangeText={onChangeText}
              value={text}
           />
            <Text >Last Name :</Text>
           <TextInput
              style={styles.childinput}
              onChangeText={onChangeText}
              value={text}
           />
            <Text >Slect Date :</Text>
            <TextInput
              style={styles.childinput}
              onChangeText={onChangeNumber}
              value={number}
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