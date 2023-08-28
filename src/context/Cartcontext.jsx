/* This code is creating a CartContext using the createContext function from the React library. It also
imports useState and useContext hooks from React. */
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const existingProduct = cartItems.find(
      (product) => product.name === newItem.name
    );

    if (!existingProduct) {
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
