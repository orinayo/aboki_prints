import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';
import CartActions from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
  const {imageUrl, name, price, quantity, id} = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(id)}>
        &#10005;
      </span>
    </div>
  );
};

const {clearItemFromCart, addItem, removeItem} = CartActions;

export default connect(null, {
  clearItem: clearItemFromCart,
  addItem,
  removeItem,
})(CheckoutItem);
