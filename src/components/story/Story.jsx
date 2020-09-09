import React from 'react';

function Story({ imgUrl, name, headerText, text }) {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img src={imgUrl} alt='Person on a tour' className='story__img' />
        <figcaption className='story__caption'>
          {name}
        </figcaption>
      </figure>
      <div className='story__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>{headerText}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Story;
