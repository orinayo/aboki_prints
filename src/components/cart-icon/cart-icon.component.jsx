import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartActions from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {CartContainer, ItemCountContainer, ShoppingIcon} from './cart-icon.styles';

const CartIcon = ({itemCount, toggleCartHidden}) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const {toggleCartHidden} = CartActions;
export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);
