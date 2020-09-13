import React from 'react';

import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Footer from './components/footer/Footer';

import './App.scss';
import './sass/main.scss';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
      <HomePage />
      <Footer />

      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>COL 1</div>
          <div className='col-1-of-2'>COL 2</div>
        </div>

        <div className='row'>
          <div className='col-1-of-3'>COL 1</div>
          <div className='col-1-of-3'>COL 2</div>
          <div className='col-1-of-3'>COL 3</div>
        </div>

        <div className='row'>
          <div className='col-1-of-3'>COL 1</div>
          <div className='col-2-of-3'>COL 2</div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>COL 1</div>
          <div className='col-1-of-4'>COL 2</div>
          <div className='col-1-of-4'>COL 3</div>
          <div className='col-1-of-4'>COL 4</div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>COL 1</div>
          <div className='col-1-of-4'>COL 2</div>
          <div className='col-2-of-4'>COL 3</div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>COL 1</div>
          <div className='col-3-of-4'>COL 2</div>
        </div>

      </section> */}
    </div>
  );
}

export default App;
