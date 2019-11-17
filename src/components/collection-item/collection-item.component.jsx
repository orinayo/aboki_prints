import React from 'react';
import {connect} from 'react-redux';
import cartActions from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem}) => {
  const {imageUrl, name, price} = item;
  return (
    <div className={`collection-item`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const {addItem} = cartActions;

export default connect(null, {addItem})(CollectionItem);
