import React from 'react';
import './NavBar.scss';
import { Button } from '..';
import cart from '../../assests/images/cart.png';

export default function Header({
  onCartClick,
  signOut,
  cartValue,
  homeClick,
  ...props
}) {
  return (
    <div className='header'>
      <div className='btnContainer'>
        {homeClick && (
          <Button
            buttonType='Secondary'
            buttonSize={'Small'}
            label='home'
            onClick={homeClick}
          />
        )}
      </div>
      <div onClick={onCartClick}>
        <img src={cart} width={25} />
        {cartValue !== 0 && (
          <span className='badge badge-warning' id='lblCartCount'>
            {cartValue}
          </span>
        )}
      </div>
      <div className='btnContainer'>
        <Button
          buttonType='Secondary'
          buttonSize={'Small'}
          label='sign out'
          onClick={signOut}
        />
      </div>
    </div>
  );
}
