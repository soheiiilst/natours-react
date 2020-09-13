import React from 'react'

function Navigation() {
  return (
    <div className='navigation'>
      <input type="checkbox" className='navigation__checkbox' id='navi-toggle' />
      
      <label htmlFor="navi-toggle" className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><span className="navigation__link"><span>01</span>About Natours</span></li>
          <li className="navigation__item"><span className="navigation__link"><span>02</span>Your benefits</span></li>
          <li className="navigation__item"><span className="navigation__link"><span>03</span>Popular tours</span></li>
          <li className="navigation__item"><span className="navigation__link"><span>04</span>Stories</span></li>
          <li className="navigation__item"><span className="navigation__link"><span>05</span>Book now</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
