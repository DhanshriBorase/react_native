

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { ApiService } from '../services/ApiService';
import { CartContext } from '../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetailsScreen: React.FC<any> = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    ApiService.getProductById(productId)
      .then(res => setProduct(res.data))
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch product details.');
      })
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      Alert.alert('Success', 'Product added to cart.');
      navigation.navigate('Cart');
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#000" />;

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16, 
    paddingTop: 20, 
    justifyContent: 'center', // Centers the card in the middle
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#28a745',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
