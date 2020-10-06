import React from 'react'

function Footer() {
  return (
    <footer className='footer'>

      <div className="footer__logo-box">
        <picture className='footer__logo'>
          <source srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" 
            media="(max-width: 37.5em)"/>

          <img srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Natours" src="img/logo-green-2x.png" />
        </picture>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><button className='footer__link'>Company</button></li>
              <li className="footer__item"><button className='footer__link'>Contact us</button></li>
              <li className="footer__item"><button className='footer__link'>Careers</button></li>
              <li className="footer__item"><button className='footer__link'>Privacy policy</button></li>
              <li className="footer__item"><button className='footer__link'>Terms</button></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <button className='footer__link'>Natours</button>, ipsam! Voluptate est soluta, odio ad quod sapiente animi earum dolore sit fugiat eaque voluptates, consequatur ipsum perferendis placeat harum expedita? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus. Copyright &copy; by Natours Company.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
