/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import data from '../data';

const ProductContext = React.createContext();

function AppProvider({children}) {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = cartItem => {
    const foundItem = cart.find(item => item.id === cartItem.id);
    if (foundItem) {
      let newCart = cart.map(item => {
        if (item.id === cartItem.id) {
          item.qty += 1;
        }
        return item;
      });
      setCart(newCart);
    } else {
      cart.push({...cartItem, qty: 1});
      setCart(cart);
    }
  };

  const removeFromCart = itemID => {
    let newCart = cart.filter(item => item.id !== itemID);
    setCart(newCart);
  };

  const incrementItem = itemID => {
    let newCart = cart.map(item => {
      if (item.id === itemID) {
        item.qty += 1;
      }
      return item;
    });

    setCart(newCart);
  };

  const decrementItem = itemID => {
    let newCart = cart.map(item => {
      if (item.id === itemID) {
        item.qty -= 1;
        if (item.qty < 0) {
          item.qty = 0;
        }
      }
      return item;
    });

    setCart(newCart);
  };

  useEffect(() => {
    console.log('cart added');
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

export default AppProvider;
