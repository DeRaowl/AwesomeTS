/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const Messanger = () => {
  const [text, setText] = useState<string>('');
  const [textLength, setTextLength] = useState<number>(10);

  const handleLength = () => {
    setTextLength(text.length);
  };

  useEffect(() => {
    handleLength();
  }, [text]);

  function charCounter() {
    let countcolor = '';
    let diff = 50 - text.length;
    if (diff > 20) {
      countcolor = 'black';
    } else if (diff > 0) {
      countcolor = 'orange';
    } else {
      countcolor = 'red';
    }
    return <Text style={{color: countcolor, fontSize: 20}}>{diff}/50</Text>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textWrapper}>Character Counter</Text>
      <View style={styles.textAreaContainer}>
        <Image
          source={{
            width: 50,
            height: 50,
            uri: 'https://pbs.twimg.com/profile_images/1455138026489724931/HiE3GNER_400x400.jpg',
          }}
          style={styles.logo}
        />
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="What's happening?"
          placeholderTextColor="#aaa"
          numberOfLines={6}
          multiline={true}
          value={text}
          onChangeText={val => setText(val)}
        />
      </View>
      <View style={styles.footer}>
        {charCounter()}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.appButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  logo: {
    paddingLeft: 18,
    paddingTop: 8,
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 20,
  },
  textAreaContainer: {
    borderColor: '#2196f3',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textArea: {
    height: 125,
    justifyContent: 'flex-start',
    padding: 20,
    fontSize: 20,
    flex: 3,
    color: '#222',
  },
  textWrapper: {
    fontSize: 28,
    textAlign: 'center',
    color: '#222',
    margin: 20,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2196f3',
    margin: 10,
    color: 'white',
    marginHorizontal: 15,
    borderRadius: 50,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
});

export default Messanger;
