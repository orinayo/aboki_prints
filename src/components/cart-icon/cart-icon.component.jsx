import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import CartActions from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({count, toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{count || 0}</span>
  </div>
);

const {toggleCartHidden} = CartActions;
export default connect(null, {toggleCartHidden})(CartIcon);
