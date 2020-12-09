import React from 'react';
import Image from '../image';
import './ProductCard.scss';

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  addToCart,
  ...props
}) {
  return (
    <div className='cardContainer'>
      <Image src={image} className='ImageContainer' />
      <div className='productDetails'>
        <section className='productTitle bottomBorder'>{title}</section>
        <p className='productDescription'>{description}</p>
        <p className='productTitle productprice'> $ {price}</p>
      </div>
      <section className='productCart' onClick={addToCart}>
        Add to Cart
      </section>
    </div>
  );
}
