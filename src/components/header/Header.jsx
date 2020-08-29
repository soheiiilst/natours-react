import React from 'react';

import Button from '../button/Button';

function Header() {
  return (
    <header
      className='header'
      style={{
        backgroundImage: `linear-gradient(
                            to right bottom,
                            rgba(126, 213, 111, 0.8),
                            rgba(40, 180, 131, 0.8)
                          ), url('img/hero.jpg')`
      }}
    >
      <div className='header__logo-box'>
        <img src='img/logo-white.png' alt='Logo' className='header__logo' />
      </div>

      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Outdoors</span>
          <span className='heading-primary--sub'>is where life happens</span>
        </h1>

        <Button color='white' animated='true'>Discover our tours</Button>
      </div>
    </header>
  );
}

export default Header;
