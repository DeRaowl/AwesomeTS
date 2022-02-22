/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const friends: {age: number; name: string}[] = [
  {
    name: 'Friend #1',
    age: 20,
  },
  {
    name: 'Friend #2',
    age: 22,
  },
  {
    name: 'Friend #3',
    age: 24,
  },
  {
    name: 'Friend #4',
    age: 25,
  },
  {
    name: 'Friend #5',
    age: 18,
  },
];

function FlatListComponent() {
  return (
    <SafeAreaView>
      <Text>Track Expenses</Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
          return (
            <Text style={styles.textStyle}>
              Name: {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#222',
  },
});

export default FlatListComponent;
