import React from 'react';

function About() {
  return (
    <section className='section-about'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum magni odit, aliquam vitae similique quos sint, voluptatem neque cupiditate repellat natus! Possimus laborum ipsam et ullam neque praesentium sint.</p>

          <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
          <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quaerat incidunt labore quasi vero optio omnis ullam, dolore odit?</p>

          <button className='btn-text'>Learn more &rarr;</button>
        </div>
        <div className='col-1-of-2'>
          <div className="composition">
            <img src="img/nat-1-large.jpg" alt="Nature 1" className="composition__photo composition__photo--p1"/>
            <img src="img/nat-2-large.jpg" alt="Nature 2" className="composition__photo composition__photo--p2"/>
            <img src="img/nat-3-large.jpg" alt="Nature 3" className="composition__photo composition__photo--p3"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
