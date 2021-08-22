import 'react-native-gesture-handler';

/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Home from './components/Home';
import Profile from './components/Profile';

 import React, {Component} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
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
 const Drawer = createDrawerNavigator();
 const App = () => {
  
 
 
   return (
     
     <>
     <NavigationContainer>
       <Drawer.Navigator 
       screenOptions={{ 
         headerShown:true,
       }}
       >
         <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="Profile" component={Profile} />
          
       </Drawer.Navigator>

          {/* <View style={styles.countainer}>
              <Calendar/> 
          </View> */}
          
     </NavigationContainer>
  
    </>
   )
 }
 
 export default App; 