/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Product from './Products';
import Cart from './Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppProvider, {useGlobalContext} from './context/ProductContext';

const Tab = createBottomTabNavigator();

function ProductContainer() {
  const {cart} = useGlobalContext();

  return (
    <AppProvider>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'ios-cart' : 'ios-cart';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#83c5be',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={Product} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default ProductContainer;
