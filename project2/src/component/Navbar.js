import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import { HeartStraight } from 'phosphor-react'
import { MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'
import { myproducts } from '../products'

const Navbar = ({search, setsearch}) => {
  // const { id } = props.data;
  const { cartitems } = useContext(Cartcontext);

  const cartitemamount = cartitems[myproducts.id]
  return (

    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <Link className="navbar-brand brand" to="/">Exclusive</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <Link to="/" className="nav-link active" aria-current="page"> 
               Home
          </Link>
          <Link to="/contact" className="nav-link">
               Contact
          </Link>
          <Link to="/about" className="nav-link">
               About
          </Link>
          <Link to="/signup" className="nav-link">
               Sign Up
          </Link>
        </ul>
        <form className="d-flex navbarform" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)}/>
          <button className="btn" type="submit"><MagnifyingGlass size={18} /></button>
        </form>
        <div className='navicons'>
          <span><Link className="icon" to='/favorite'><HeartStraight size={25} /></Link></span>
          <span><Link className="icon" to='/cart'><ShoppingCart  size={25}/><span>{cartitemamount > 0 && <>({cartitemamount})</>}</span></Link></span>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar

// .filter((items) => ((items.items).toLowerCase()).includes(search.toLowerCase()))