/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {useGlobalContext} from './context/ProductContext';

function Cart() {
  const {cart, products} = useGlobalContext();
  console.log(cart.length, 'i');
  return (
    <SafeAreaView>
      {cart.length > 0
        ? cart.map(item => {
            <Text>item.title</Text>;
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
            />;
          })
        : 'Cart is empty'}
    </SafeAreaView>
  );
}

export default Cart;
