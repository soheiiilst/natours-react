import React from 'react';

import Button from '../button/Button';

function Card({
  id,
  title,
  days,
  people,
  guides,
  sleep,
  difficulty,
  imgUrl,
  gradient,
  price
}) {
  return (
    <div className='card'>
      {/* Front side */}
      <div className='card__side card__side--front'>
        <div
          className="card__picture"
          style={{
            backgroundImage: `${gradient}, url(${imgUrl})`
          }}
        >
          &nbsp;
        </div>
        <h4 className='card__heading'>
          <span className={`card__heading-span card__heading-span--${id}`}>
            {title}
          </span>
        </h4>
        <div className='card__details'>
          <ul>
            <li>{days} day tours</li>
            <li>Up to {people} people</li>
            <li>{guides} tour guides</li>
            <li>Sleep in {sleep}</li>
            <li>Difficalty: {difficulty}</li>
          </ul>
        </div>
      </div>

      {/* Back side */}
      <div className={`card__side card__side--back card__side--back-${id}`}>
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>Only</p>
            <p className='card__price-value'>${price}</p>
          </div>
          <Button color='white'>Book now!</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
