import React from 'react';

import HeadingSecondary from '../heading-secondary/HeadingSecondary';

function About() {
  return (
    <section className='section-about'>
      <HeadingSecondary text='Exciting tours for adventurous people' />

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            You're going to fall in love with nature
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorum magni odit, aliquam vitae similique quos sint, voluptatem
            neque cupiditate repellat natus! Possimus laborum ipsam et ullam
            neque praesentium sint.
          </p>

          <h3 className='heading-tertiary u-margin-bottom-small'>
            Live adventures like you never have before
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            quaerat incidunt labore quasi vero optio omnis ullam, dolore odit?
          </p>

          <button className='btn-text'>Learn more &rarr;</button>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <img
              srcSet='img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw,(max-width: 600px) 30vw, 300px'
              src='img/nat-1-large.jpg'
              alt='Nature 1'
              className='composition__photo composition__photo--p1'
            />

            <img
              srcSet='img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw,(max-width: 600px) 30vw, 300px'
              src='img/nat-2-large.jpg'
              alt='Nature 2'
              className='composition__photo composition__photo--p2'
            />

            <img
              srcSet='img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w'
              sizes='(max-width: 900px) 20vw,(max-width: 600px) 30vw, 300px'
              src='img/nat-3-large.jpg'
              alt='Nature 3'
              className='composition__photo composition__photo--p3'
            />
            
            {/* 
            <img
              src='img/nat-1-large.jpg'
              alt='Nature 1'
              className='composition__photo composition__photo--p1'
            />
            <img
              src='img/nat-2-large.jpg'
              alt='Nature 2'
              className='composition__photo composition__photo--p2'
            />
            <img
              src='img/nat-3-large.jpg'
              alt='Nature 3'
              className='composition__photo composition__photo--p3'
            />*/}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
