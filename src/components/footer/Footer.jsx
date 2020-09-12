import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__logo-box">
        <img src="img/logo-green-2x.png" alt="Natours" className='footer__logo' />
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
