import React from 'react'
import ladies from '../images/ladies.jpg'
import delivery from '../images/delivery.jpg'
import guarantee from '../images/guarantee.jpg'
import customer from '../images/customer.jpg'
import director from '../images/director.jpg'
import designer from '../images/designer.jpg'
import founder from '../images/founder.jpg'
import { CurrencyCircleDollar } from 'phosphor-react'
import { Money } from 'phosphor-react'
import { Gift } from 'phosphor-react'
import { Bank } from 'phosphor-react'

const About = () => {
  return (
    <div className='about'>
      <div className='story d-flex'>
        <div className='storyline text-center'>
          <h2>Our Story</h2>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className='storypic'>
          <img src={ladies} alt='' />
        </div>
      </div>

      <div className='ourbtn'>
      <section className='m-3 text-center d-flex justify-content-around'>
            <div>
                <Bank size={32} />
                <h3>10.5K</h3>
                <p>Active Sellers</p>
            </div>
            <div>
            <CurrencyCircleDollar size={32} />
            <h3>33k</h3>
            <p>Monthly Product Sales</p>
            </div>
            <div>
            <Gift size={32} />
            <h3>45.5K</h3>
            <p>customers cctive on our site</p>
            </div>
            <div>
            <Money size={32} />
            <h3>25K</h3>
            <p>Annual gross sales</p>
            </div>
        </section>
     </div>

      <div className='management d-flex justify-content-around text-center'>
        <div className='founder'>
            <div>
                <img src={founder} alt='' className='rounded-circle' width='100px' />
                <h3>James Akinwumi</h3>
                <p>founder & Chairman</p>
            </div> 
        </div>

        <div className='director'>
            <div>
                <img src={director} alt='' className='rounded-circle' width='100px' />
                <h3>Emma Watson</h3>
                <p>Managing director</p>
            </div>
        </div>
        <div className='designer'>
            <div>
                <img src={designer} alt='' className='rounded-circle' width='100px' />
                <h3>Will Smith</h3>
                <p>Product Designer</p>
            </div>
        </div>
     </div>

      <div className='offer'>
      <section className='m-3 text-center d-flex justify-content-between'>
            <div>
                <img src={delivery} alt='' className='rounded-circle' width='100px' />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>free delivery for all orders over $140</p>
            </div>
            <div>
            <img src={customer} alt='' className='rounded-circle' width='100px' />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>friendly 24/7 customer support</p>
            </div>
            <div>
            <img src={guarantee} alt='' className='rounded-circle' width='100px' />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>we return money withing 30 days</p>
            </div>
        </section>
      </div>

     
    </div>
  )
}

export default About