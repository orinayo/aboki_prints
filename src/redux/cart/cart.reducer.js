import {CartActionTypes} from './cart.types';
import { combineReducers } from 'redux';
import { addItemToCart } from './cart.utils';


const cartItemsById = (state = {}, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return addItemToCart(state, action.payload);
    default:
      return state;
  }
};

const allCartItemsIds = (state = [], action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return [...new Set([...state, action.payload.id])];
    default:
      return state;
  }
};

const cartHidden = (
    state = true,
    action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return !state;
    default:
      return state;
  }
};

const cartItemsReducer = combineReducers({
  byId: cartItemsById,
  allIds: allCartItemsIds,
});

const cartReducer = combineReducers({
  hidden: cartHidden,
  items: cartItemsReducer,
});

export default cartReducer;
