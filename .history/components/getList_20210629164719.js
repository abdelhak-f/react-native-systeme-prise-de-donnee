import React, { Component} from 'react';
import { Text, View } from 'react-native';

function getList() {
  return (
    <View style={styles.container} >
    <Text style={styles.h2text}>
      Black Order
    </Text>
      <FlatList
      data={this.state.users}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =>
      <View style={styles.flatview}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      }
      keyExtractor={item => item.email}
    />
  </View>
  )
}

export default getList



