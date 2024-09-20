
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for your purchase!</Text>
      <Button title="Back to Products" onPress={() => navigation.navigate('ProductList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CheckoutScreen;
