/* eslint-disable prettier/prettier */
import React, {useContext, useReducer} from 'react';
import {Text, View} from 'react-native';
import data from '../data';

const ProductContext = React.createContext('Hi');

const reducer = () => {};

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  products: data,
};

function AppProvider({children}) {
  const [state, action] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{...initialState}}>
      {children}
    </ProductContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

export default AppProvider;
