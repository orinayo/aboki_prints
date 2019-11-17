export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems[cartItemToAdd.id];
  if (existingCartItem) {
    const updatedCartItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };

    return {...cartItems, [cartItemToAdd.id]: updatedCartItem};
  }

  return {
    ...cartItems,
    [cartItemToAdd.id]: {...cartItemToAdd, quantity: 1},
  };
};
