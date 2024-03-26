import React from 'react'
import { mymainproducts } from '../mainproduct'
import Mainproductpage from './Mainproductpage'
import { Link } from 'react-router-dom'

const Allproducts = () => {
  return (
    <div className='allprodt d-flex'>
      <div className='leftrow'>
      <div className="top-links">
            <ul>
                <Link to="/women" className="nav-link" aria-current="page"> 
                    Women's Fashion
                </Link>

                <Link to="/men" className="nav-link">
                    men's Fashion
                </Link>

                <Link to="/electronics" className="nav-link">
                    Electronics
                </Link>

                <Link to="/lifestyle" className="nav-link">
                    Home &Lifestyle
                </Link>

                <Link to="/medicine" className="nav-link">
                    Medicine
                </Link>

                <Link to="/signup" className="nav-link">
                    Sports & Outdoor
                </Link>

                <Link to="/toys" className="nav-link">
                    Baby's & Toys
                </Link>

                <Link to="/groceries" className="nav-link">
                    Groceries & Pets
                </Link>

                <Link to="/beauty" className="nav-link">
                    Health & Beauty
                </Link>
            </ul>
            </div>
      </div>
      <div className='rightrow d-flex row row-cols-4'>
      {mymainproducts.map ((product) => <Mainproductpage data={product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Allproducts