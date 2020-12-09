import React from 'react';
import Images from '../image';
import './cartCard.scss';

export default function CardCart({
  image,
  title,
  qty = 0,
  onAdd,
  onRemove,
  price = 1,
  ...props
}) {
  return (
    <div className='cartCardContainer'>
      <div>
        <Images src={image} className='cardImageContainer' />
      </div>
      <p className='cardTitle'>{title}</p>
      <div className='cardContentContainer'>
        <div className='cardContent'>
          <span className='addbtnStyle' onClick={onAdd}>
            +
          </span>
          <input
            className='cartTextBox'
            readOnly
            disabled='disabled'
            value={qty}
          />
          <span className='addbtnStyle' onClick={onRemove}>
            -
          </span>
        </div>
        <div className='priceStyle'>
          <p className='priceStyle'>Price: {(price * qty).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
