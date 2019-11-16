import {CartActionTypes} from './cart.types';

const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export default {
  toggleCartHidden,
};
