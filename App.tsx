/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Counter from './components/Counter';
import Messanger from './components/Messanger';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Counter App')}
        style={styles.btnConponent}>
        <Text style={styles.txtComponent}>Counter App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnConponent}
        onPress={() => navigation.navigate('Character Counter')}>
        <Text style={styles.txtComponent}>Character Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Native Nav" component={Welcome} />
        <Stack.Screen name="Counter App" component={Counter} />
        <Stack.Screen name="Character Counter" component={Messanger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnConponent: {
    width: 200,
    backgroundColor: '#83c5be',
    padding: 10,
    color: '#fff',
    margin: 10,
  },
  txtComponent: {color: '#fff', textAlign: 'center', fontSize: 20},
});

export default App;
