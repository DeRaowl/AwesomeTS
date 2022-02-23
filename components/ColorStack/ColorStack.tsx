/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ColorStack = ({colors}) => {
  return (
    <FlatList
      keyExtractor={item => item.color}
      data={colors}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 20,
              opacity: 0.6,
            }}
          />
        );
      }}
    />
  );
};

export default ColorStack;
