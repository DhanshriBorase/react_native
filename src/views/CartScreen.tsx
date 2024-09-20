
import React, { useContext } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // <-- Import useNavigation
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, getTotalPrice, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation();  // <-- Get navigation object

  console.log('Cart Items:', cartItems); // Debugging line

  if (!cartItems.length) return <Text style={styles.emptyCartText}>Your cart is empty</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Checkout')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  emptyCartText: { textAlign: 'center', fontSize: 18, color: '#888', marginTop: 50 },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  itemDetails: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  price: { fontSize: 16, color: '#888', marginTop: 5 },
  footer: { marginTop: 20 },
  total: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'right' },
});

export default CartScreen;
