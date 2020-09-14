import React from 'react'

import Button from '../button/Button';

function Popup() {
  return (
    <div className='popup' id='popup'>
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="Tour" className='popup__img' />
          <img src="img/nat-9.jpg" alt="Tour" className='popup__img' />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start book now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus ab libero? Suscipit eveniet, aliquam quasi blanditiis qui laudantium incidunt cupiditate asperiores id aspernatur enim officia voluptate officiis illum ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sit, dolor alias omnis eligendi doloremque labore dolorum quis iure, facilis nihil et. Obcaecati libero eos provident blanditiis, nihil totam natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ipsum nostrum sapiente eligendi iusto, rerum, autem nemo labore voluptatum recusandae aperiam ad nihil corporis harum doloremque facere. Ducimus, quis. Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum veniam assumenda ea accusantium autem eos officia recusandae esse in voluptatem animi maxime ducimus tempore nesciunt eligendi, soluta amet inventore.
          </p>
          <Button color='green'>Book now</Button>
        </div>
      </div>
    </div>
  )
}

export default Popup
