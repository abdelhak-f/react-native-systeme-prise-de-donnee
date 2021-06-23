import 'react-native-gesture-handler';

/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import InputChoose from './components/InputChoose';
 import React, {Component} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/drawer';
 import { View } from 'react-native';
 
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
 const Stack = createStackNavigator();
 const App = () => {
  
 
 
   return (
     
     <>
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={InputChoose} />
           {/* <View style={styles.countainer}>
             <Calendar/>
          </View> */}
         </Stack.Navigator>
     </NavigationContainer>
  
    </>
   )
 }
 
 export default App; 