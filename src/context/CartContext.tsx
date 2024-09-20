// import React, { createContext, useState, ReactNode } from 'react';
// import { Product } from '../models/ProductModel'; // Ensure the path to ProductModel is correct


// // Define the provider props type
// interface CartProviderProps {
//   children: ReactNode;
// }

// // Create the context
// export const CartContext = createContext<CartContextType | undefined>(undefined);

// // Create the provider component
// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems(prevItems => [...prevItems, product]);
//   };

//   const removeFromCart = (productId: number) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useState, ReactNode } from 'react';
// import { Product } from '../models/ProductModel'; // Ensure the path to ProductModel is correct

// // Define the context type
// interface CartContextType {
//   cartItems: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: number) => void;
//   getTotalPrice: () => number;
// }

// // Define the provider props type
// interface CartProviderProps {
//   children: ReactNode;
// }

// // Create the context
// export const CartContext = createContext<CartContextType | undefined>(undefined);

// // Create the provider component
// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems(prevItems => [...prevItems, product]);
//   };

//   const removeFromCart = (productId: number) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../models/ProductModel';

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getTotalPrice: () => number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
