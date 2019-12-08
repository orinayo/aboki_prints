import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import CartActions from '../../redux/cart/cart.actions';
import {CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
    }}>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const {toggleCartHidden} = CartActions;
export default withRouter(
    connect(mapStateToProps, {toggleCartHidden})(CartDropdown)
);
