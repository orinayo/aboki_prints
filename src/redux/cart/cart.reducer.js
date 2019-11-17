import {CartActionTypes} from './cart.types';
import {combineReducers} from 'redux';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const cartItemsById = (state = {}, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return addItemToCart(state, action.payload);
    case CartActionTypes.CLEAR_ITEM_FROM_CART: {
      const stateCopy = {...state};
      delete stateCopy[action.payload];
      return {
        ...stateCopy,
      };
    }
    case CartActionTypes.REMOVE_ITEM:
      return removeItemFromCart(state, action.payload);
    default:
      return state;
  }
};

const allCartItemsIds = (state = [], action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return [...new Set([...state, action.payload.id])];
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return state.filter((id) => id !== action.payload);
    case CartActionTypes.REMOVE_ITEM: {
      if (action.payload.quantity !== 1) return state;
      return state.filter((id) => id !== action.payload.id);
    }
    default:
      return state;
  }
};

const cartHidden = (state = true, action) => {
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
