import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Children,
} from "react";

interface CartContextType {
  cartItems: number;
  addToCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  const clearCart = () => {
    setCartItems(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
