/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import data from './data';
import {useGlobalContext} from './context/ProductContext';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Product({navigation}) {
  const {products, cart, addToCart} = useGlobalContext();
  const [itemExists, setItemExists] = useState(false);

  const ProductList = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#eee',
          margin: 10,
          width: 170,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 150,
            height: 150,
            borderWidth: 2,
            resizeMode: 'contain',
            margin: 8,
            borderRadius: 40,
          }}
        />
        <View>
          <View
            style={{
              display: 'flex',
              //   flexDirection: 'row',
              margin: 0,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#222',
                fontSize: 16,
                marginVertical: 0,
                marginRight: 10,
              }}>
              {item.title}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 5,
              }}>
              <Text
                style={{color: '#222', marginVertical: 0, fontWeight: '700'}}>
                ₹ {item.price}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#222',
                    marginVertical: 0,
                    fontWeight: '700',
                    textDecorationLine: 'line-through',
                    fontSize: 12,
                    marginLeft: 10,
                  }}>
                  ₹12000
                </Text>
                <Text
                  style={{
                    color: '#222',
                    marginVertical: 0,
                    fontWeight: '700',
                    fontSize: 12,
                    color: '#fca5a5',
                    marginLeft: 3,
                  }}>
                  40% off
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              addToCart(item);
              navigation.navigate('Cart');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#83c5be',
              borderRadius: 5,
              borderColor: '#83c5be',
              marginBottom: 20,
              width: 120,
              marginVertical: 12,
              padding: 10,
              marginLeft: 12,
            }}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
      {/* <Text
        style={{
          fontSize: 52,
          marginVertical: 20,
          marginLeft: 50,
          color: '#83c5be',
          fontFamily: 'Roboto',
          opacity: 0.4,
        }}>
        Cycle World
      </Text> */}
      <FlatList
        data={products}
        renderItem={ProductList}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
      />
    </SafeAreaView>
  );
}

export default Product;
