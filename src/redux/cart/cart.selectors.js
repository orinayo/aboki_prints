import {createSelector} from 'reselect';

const getCart = (state) => state.cart;
const getCartItems = (state) => state.cart.items;

export const selectCartHidden = createSelector([getCart], (cart) => cart.hidden);

export const selectCartItems = createSelector([getCartItems], (items) =>
  items.allIds.map((id) => items.byId[id])
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);
