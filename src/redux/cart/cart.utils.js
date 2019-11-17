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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems[cartItemToRemove.id];
  if (existingCartItem.quantity === 1) {
    const cartCopy = {...cartItems};
    delete cartCopy[cartItemToRemove.id];
    return {...cartCopy};
  }
  const updatedCartItem = {
    ...existingCartItem,
    quantity: existingCartItem.quantity - 1,
  };

  return {
    ...cartItems,
    [cartItemToRemove.id]: updatedCartItem,
  };
};
