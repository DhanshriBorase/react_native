
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LogicScreen';
import ProductListScreen from '../views/ProductListScreen';
import ProductDetailsScreen from '../views/ProductDetailScreen';
import CartScreen from '../views/CartScreen';
import CheckoutScreen from '../views/CheckoutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

