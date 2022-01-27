/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  function handleIncr() {
    setCounter(counter + 1);
  }

  function handleDecr() {
    let newCount: number = counter - 1;
    if (newCount < 1) {
      setCounter(0);
    } else {
      setCounter(newCount);
    }
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Counter App</Text>
      <Text style={styles.textContainer}>{counter}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleIncr} style={styles.button}>
          <Text style={styles.appButtonText}>Incr</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReset} style={styles.button}>
          <Text style={styles.appButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecr} style={styles.button}>
          <Text style={styles.appButtonText}>Decr</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 500,
    margin: 20,
  },
  header: {fontSize: 40},
  textContainer: {
    fontSize: 70,
    color: '#222',
  },
  btnContainer: {display: 'flex', flexDirection: 'row'},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: '#83c5be',
    margin: 10,
    color: 'white',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
});

export default Counter;
