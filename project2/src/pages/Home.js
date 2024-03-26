import React from 'react'
import slider1 from '../../src/images/slider1.png'
import slider2 from '../../src/images/slider2.jpg'
import slider3 from '../../src/images/slider3.jpg'
import slider4 from '../../src/images/slider4.jpeg'
import slider5 from '../../src/images/slider5.jpg'
import speaker from '../images/speaker.jpg'
import delivery from '../images/delivery.jpg'
import guarantee from '../images/guarantee.jpg'
import customer from '../images/customer.jpg'
import homespeaker from '../images/homespeaker.jpg'
import perfume from '../images/perfume.jpg'
import playstation from '../images/playstation.jpg'
import womenthings from '../images/womenthings.jpg'
import { Link } from 'react-router-dom'
import { bestproducts } from '../bestselling'
import Bestselling from './Bestselling'
import { myproducts } from '../products'
import Myproductpage from './Myproductpage'
import { DeviceMobile } from 'phosphor-react'
import { Laptop } from 'phosphor-react'
import { Watch } from 'phosphor-react'
import { Headphones } from 'phosphor-react'
import { GameController } from 'phosphor-react'
import { Camera } from 'phosphor-react'
import { Bag } from 'phosphor-react'


const Home = () => {
  return (
     <div className='home '>
        <section className='top d-flex'>

        <div className="top-links">
            <ul>
                <Link to="/" className="nav-link" aria-current="page"> 
                    Women'sFashion
                </Link>
                <Link to="/contact" className="nav-link">
                    men's Fashion
                </Link>
                <Link to="/about" className="nav-link">
                    Electronics
                </Link>
                <Link to="/signup" className="nav-link">
                    Home &Lifestyle
                </Link>
                <Link to="/signup" className="nav-link">
                    Medicine
                </Link>
                <Link to="/signup" className="nav-link">
                    Sports & Outdoor
                </Link>
                <Link to="/signup" className="nav-link">
                    Baby's & Toys
                </Link>
                <Link to="/signup" className="nav-link">
                    Groceries & Pets
                </Link>
                <Link to="/signup" className="nav-link">
                    Health & Beauty
                </Link>
            </ul>
            </div>

           <div id="carouselExampleSlidesOnly" className="carousel slide pictures" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider2} className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider3} className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider4} className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider5} className="d-block w-100"  alt="..." />
                    </div>
                </div>
            </div>

        </section>
        
        <section className='bestselling'>
            <div className='bestsellinginner'>
            <p className='tag'>This Month</p>
            <div className='d-flex justify-content-between'>
            <h3>Best Selling Produts</h3>
            <Link to="" className='btn btn-danger'>View All</Link>
            </div>

            <div className='prod d-flex row row-cols-5'>
                {bestproducts.map((product) => <Bestselling data={product} key={product.id} />)}
            </div>
            </div>
        </section>

        <section className='section3'>
        <p className='tag'>Categories</p>
            <h3>Browse By Category</h3>
            <div className='category d-flex justify-content-center'>
                <Link to="" className='categorylink nav-link border border-light' >
                <DeviceMobile size={50} />
                <p>Phone</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <Laptop size={50} />
                <p>Laptop</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <Watch size={50} />
                <p>Smartwatch</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <Headphones size={50} />
                <p>Headphones</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <GameController size={50} />
                <p>Gaming</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <Camera size={50} />
                <p>Camera</p>
                </Link>
                <Link to="" className='categorylink nav-link border border-light'>
                <Bag size={50} />
                <p>Bags</p>
                </Link>
                
            </div>
        </section>

        <section className='section4'>
            <div className='speaker'>
                <img src={speaker} alt="" />
                <Link to="" className='btn btn-danger'>Buy Now</Link>
            </div>
        </section>

        <section className='section5'>
            <div className='ourproducts'>
            <p className='tag'>Our Produts</p>
            <div className='d-flex justify-content-between'>
            <h3>Explore Our Produts</h3>
            <Link to="/allproducts" className='btn btn-danger'>View All</Link>
            </div>

            <div className='prod d-flex row row-cols-6'>
                { myproducts.map((product) => <Myproductpage data={product} key={product.id} />)}
            </div>
            </div>
        </section>

        <section className='section6 container'>
        <div className='featured'>
        <p className='tag'>Featured</p>
        <h3>New Arrival</h3>
        <div className='imgcatalogue row row-cols-2'>
            <Link><p className='col'> <img src={playstation} alt='' /></p></Link>
            <Link><p className='col'><img src={womenthings} alt=''  /></p></Link>
            <Link><p className='col'><img src={homespeaker} alt='' /></p></Link>
            <Link><p className='col'><img src={perfume} alt=''/></p></Link>
            
            
        </div>
        </div>
        

        </section>

        <section className='section7 d-flex justify-content-between'>
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
  ) 
}

export default Home
