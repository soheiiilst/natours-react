import React from 'react'

import About from '../../components/about/About';
import Features from '../../components/features/Features';
import Tours from '../../components/tours/Tours';
import Stories from '../../components/stories/Stories';

function HomePage() {
  return (
    <main>
      <About />
      <Features />
      <Tours />
      <Stories />
    </main>
  )
}

export default HomePage
