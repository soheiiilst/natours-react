import React from 'react';

import HeadingSecondary from '../heading-secondary/HeadingSecondary';
import Card from '../card/Card';
import Button from '../button/Button';

function Tours() {
  const cards = [
    {
      id: 1,
      title: 'The Sea Explorer',
      days: 3,
      people: 30,
      guides: 2,
      sleep: 'cozy hostel',
      difficulty: 'very easy',
      imgUrl: 'img/nat-5.jpg',
      gradient: 'linear-gradient(to right bottom, #ffb900, #ff7730)',
      price: 297
    },
    {
      id: 2,
      title: 'The Forest Hiker',
      days: 7,
      people: 40,
      guides: 6,
      sleep: 'provided tents',
      difficulty: 'medium',
      imgUrl: 'img/nat-6.jpg',
      gradient: 'linear-gradient(to right bottom, #7ed56f, #28b485)',
      price: 497
    },
    {
      id: 3,
      title: 'The Snow Adventurer',
      days: 5,
      people: 15,
      guides: 3,
      sleep: 'provided tents',
      difficulty: 'hard',
      imgUrl: 'img/nat-7.jpg',
      gradient: 'linear-gradient(to right bottom, #2998ff, #5643fa)',
      price: 897
    }
  ];

  return (
    <section className='section-tours'>
      <HeadingSecondary text='Most popular tours' />

      <div className='row'>
        {cards.map(card => (
          <div key={card.id} className='col-1-of-3'>
            <Card {...card} />
          </div>
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge">
          <Button color='green'>Discover all tours</Button>
      </div>
    </section>
  );
}

export default Tours;
