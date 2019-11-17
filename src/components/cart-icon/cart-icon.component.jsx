import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './cart-icon.styles.scss';
import CartActions from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({itemCount, toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const {toggleCartHidden} = CartActions;
export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);
