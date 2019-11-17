import {CartActionTypes} from './cart.types';

const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export default {
  toggleCartHidden,
  addItem,
};
