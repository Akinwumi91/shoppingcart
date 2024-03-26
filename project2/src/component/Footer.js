import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogo } from 'phosphor-react'
import {LinkedinLogo} from 'phosphor-react'
import {InstagramLogo} from 'phosphor-react'
import {TwitterLogo} from 'phosphor-react'
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footinner d-flex justify-content-between '>
      <section className='section1'>
        <h3>Exclusive</h3>
        <h4>Subcribe</h4>
        <p>get 10% off your first order</p>
        <div>
          <input type='text' className="form-control me-2" placeholder="input your Email" max-width="300px"  />
        </div>
      </section>

      <section className='section2'>
      <h3>Spport</h3>
      <p>2, Irepodun Cement-Ikeja Lagos</p>
      <p>exclusive@gmail.com</p>
      <p>+23412345678</p>
      </section>

      <section className='section3'>
      <h3>Account</h3>
        <ul className='navbar-nav'>
          <li className='nav-item'><Link className='nav-link' to=''>My Account</Link></li>
          <li className='nav-item'><Link className='nav-link' to=''>Login/Register</Link></li>
          <li className='nav-item'><Link className='nav-link' to=''>Cart</Link></li>
          <li className='nav-item'><Link className='nav-link' to=''>Wishlist</Link></li>
          <li className='nav-item'><Link className='nav-link' to=''>Shop</Link></li>
        </ul>
      </section>

      <section className='section4'>
      <h3>Quick Link</h3>
       <ul className='navbar-nav'>
        <li className='nav-item'><Link className='nav-link'to=''>Privacy Policy</Link></li>
        <li className='nav-item'><Link className='nav-link'to=''>Term Of Use</Link></li>
        <li className='nav-item'><Link className='nav-link'to=''>FAQ</Link></li>
        <li className='nav-item'><Link className='nav-link'to=''>Contact</Link></li>
       </ul>

      </section>

      <section className='section5'>
      <h3>Dounload App</h3>
      <p>save $3 new user only</p>
      <div className='d-block'>
        <div><img src={playstore} alt='' /></div>
        <div><img src={appstore} alt='' /></div>
      </div>
      <div className='d-flex'>
        <Link className='nav-link' to=''><FacebookLogo size={32} /></Link>
        <Link className='nav-link' to=''><InstagramLogo size={32} /></Link>
        <Link className='nav-link' to=''><TwitterLogo size={32} /></Link>
        <Link className='nav-link' to=''><LinkedinLogo size={32} /></Link>
      </div>

      </section>

      </div>

<span className='copytext'>&copy; copyright Charles 2022. All right reserved</span>
    </div>
  )
}

export default Footer

{/* <p className='copytext text-center'>&copy; copyright Charles 2022. All right reserved</p> */}

