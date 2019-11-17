import {CartActionTypes} from './cart.types';
import { combineReducers } from 'redux';
import { addItemToCart } from './cart.utils';


const cartItemsbyId = (state = {}, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return addItemToCart(state, action.payload);
    default:
      return state;
  }
};

const allCartItemsId = (state = [], action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return [...new Set([...state, action.payload.id])];
    default:
      return state;
  }
};

const cartHidden = (
    state = {
      hidden: true,
    },
    action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

const cartReducer = combineReducers({
  hidden: cartHidden,
  byId: cartItemsbyId,
  allIds: allCartItemsId,
});

export default cartReducer;
