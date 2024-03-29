import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount,setItemAmount]=useState(0);

  //total price state
  const [totalPrice,setTotlaPrice]=useState(0);

  //update total price
  useEffect(()=>{
    const totalPrice = cart.reduce((accumulator,currentItem)=>{
      return accumulator+currentItem.price*currentItem.amount
    },0)
    setTotlaPrice(totalPrice)
  },[cart])

  //update item amount
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator,currentItem)=>{
        return accumulator+currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //remove cart
  const removeCart = () => {
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
