import React from 'react';

import HeadingSecondary from '../heading-secondary/HeadingSecondary';
import Story from '../story/Story';
import BgVideo from '../bg-video/BgVideo';

function Stories() {
  const persons = [
    {
      id: 1,
      name: 'Mary Smith',
      imgUrl: 'img/nat-8.jpg',
      headerText: 'I had the best week ever with my family',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sunt enim autem corporis voluptatem nihil obcaecati unde tempore alias dicta tenetur deserunt, maxime, rem dolor velit quod. Quia, inventore voluptas. Lorem, ipsum dolor sit amet consectetur adipis!'
    },
    {
      id: 2,
      name: 'Jack Wilson',
      imgUrl: 'img/nat-9.jpg',
      headerText: 'WOW! My life is completely different now',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis temporibus vitae assumenda laudantium, fugit nam totam culpa sunt ea accusamus doloremque officiis cupiditate blanditiis dolore provident minima, obcaecati dolorem? Sequi architecto ut dignissimos numquam autem.'
    }
  ];

  return (
    <section className='section-stories'>
      <BgVideo />

      <HeadingSecondary text='We make people genuinely happy' />

      {persons.map(person => (
        <div key={person.id} className='row'>
          <Story {...person} />
        </div>
      ))}

      <div className='u-center-text u-margin-top-huge'>
        <button className='btn-text'>Read all stories &rarr;</button>
      </div>
    </section>
  );
}

export default Stories;
