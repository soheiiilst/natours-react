import React from 'react';

import FeatureBox from '../feature-box/FeatureBox';

import '../../assets/styles.css';

function Features() {
  let counter = 0;
  const features = [
    {
      icon: 'icon-basic-world',
      header: 'Explore the world',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium doloribus debitis expedita.'
    },
    {
      icon: 'icon-basic-compass',
      header: 'Meet nature',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate consequuntur ducimus.'
    },
    {
      icon: 'icon-basic-map',
      header: 'Find your way',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, temporibus a? Quasi dolore temporibus.'
    },
    {
      icon: 'icon-basic-heart',
      header: 'Live a healthier life',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores consequatur, veniam ducimus quae.'
    }
  ];

  return (
    <section
      className='section-features'
      style={{
        backgroundImage: `linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.8),
          rgba(40, 180, 131, 0.8)
        ), url('img/nat-4.jpg')`
      }}
    >
      <div className='row'>
        {features.map(({ icon, header, text }) => (
          <div key={++counter} className='col-1-of-4'>
            <FeatureBox icon={icon} header={header} text={text} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
