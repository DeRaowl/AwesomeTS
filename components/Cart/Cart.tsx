/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useGlobalContext} from './context/ProductContext';

function Cart() {
  const {cart, products, incrementItem, decrementItem, removeFromCart} =
    useGlobalContext();

  const getTotalAmount = () => {
    const totalQlt = 0;

    const totalAmount = cart.reduce((total, item) => {
      total += +item.qty * +item.price;
      return total;
    }, 0);
    return totalAmount;
  };

  const CartItem = ({item}) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 20,
          marginHorizontal: 10,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 100,
            height: 100,
            borderWidth: 2,
            resizeMode: 'contain',
            margin: 8,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={{color: '#222', fontSize: 17}}>{item.title}</Text>
          <Text style={{color: '#222', marginTop: 5, fontSize: 18}}>
            ₹ {item.price}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => decrementItem(item.id)}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#ddd',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                borderRadius: 50,
              }}>
              <Text style={{color: '#777', fontSize: 24}}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#777', fontSize: 24}}>{item.qty}</Text>
            <TouchableOpacity
              onPress={() => incrementItem(item.id)}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#ddd',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                borderRadius: 50,
              }}>
              <Text style={{color: '#777', fontSize: 24}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{color: '#fca5a5'}}
            onPress={() => removeFromCart(item.id)}>
            Remove
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={cart} renderItem={CartItem} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <View>
          <Text style={{fontSize: 18, color: '#222'}}>Total Amount: </Text>
          <Text style={{fontSize: 24, color: '#222'}}>
            {' '}
            ₹ {getTotalAmount()}
          </Text>
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#83c5be', padding: 14, borderRadius: 16}}>
          <Text
            style={{fontSize: 20, fontWeight: '500'}}
            onPress={() => alert('Order placed successfully')}>
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Cart;
