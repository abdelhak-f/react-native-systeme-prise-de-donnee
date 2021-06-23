/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   View,
 } from 'react-native';
 
 
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
 
   return (
     <>
           <Calendar
             //   renderHeader={(date) => {
             //       return (<Text style={{ color: "#0066ff" }}>Mon calendrier {date.getDate()}</Text>)
             //   }}
               onDayLongPress={(e) => {
                   console.log(`e`, e)
               }}
         onMonthChange={(e) => {
           console.log(`e`, e)
         }}
         onPressArrowLeft={(goBack) => {
 
           console.log("mois-passé")
           goBack()
         }}
         enableSwipeMonths
         onPressArrowRight={(goFuture) => {
           console.log("mois-suivant")
           goFuture()
         }}
         onDayPress={(e) => {
           console.log(`e`, e)
         }}
         firstDay={1}
         style={{ height: "100%" }
         }
       />
     </>
 
   )
 }
 
 export default App; 