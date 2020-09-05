import React from 'react';

function FeatureBox({ icon, header, text }) {
  return (
    <div className='feature-box'>
      <i className={`feature-box__icon ${icon}`}></i>
      <h3 className='u-margin-bottom-small heading-tertiary'>{header}</h3>
      <p className='feature-box__text'>{text}</p>
    </div>
  );
}

export default FeatureBox;
