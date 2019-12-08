import React from 'react';
import {connect} from 'react-redux';
import CartActions from '../../redux/cart/cart.actions';
import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
  const {imageUrl, name, price, quantity, id} = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(id)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const {clearItemFromCart, addItem, removeItem} = CartActions;

export default connect(null, {
  clearItem: clearItemFromCart,
  addItem,
  removeItem,
})(CheckoutItem);
