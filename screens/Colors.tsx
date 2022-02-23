/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ColorStack from '../components/ColorStack/ColorStack';

const Colors = () => {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const getRandomColor = () => {
    const newColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
    return newColor;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setColors([...colors, getRandomColor()]);
        }}>
        <Text style={styles.textContent}>Add Colors</Text>
      </TouchableOpacity>
      <ColorStack colors={colors} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'grey',
    padding: 10,
  },
  textContent: {
    fontSize: 25,
  },
});

export default Colors;
