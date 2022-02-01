/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import Product from './Products';
import Cart from './Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppProvider from './context/ProductContext';

const Tab = createBottomTabNavigator();
function ProductContainer() {
  return (
    <AppProvider>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={Product} />
          <Tab.Screen name="Cart" component={Cart} options={{tabBarBadge: 3}} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default ProductContainer;
