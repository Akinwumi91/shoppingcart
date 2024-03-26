import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'

const Myproductpage = (props) => {
    const{id, name, image, price, body} = props.data
    const{addtocart, cartitems} = useContext(Cartcontext)

    const cartitemamount = cartitems[id]
    return (
      <div className='bestselling myprdt'>
            <Link to={`/home/${id}`} className="card nav-link">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className='body'>{body.length <= 10 ? body: `${body.slice(0, 20)}...`}</p>
                  <p>${price}</p>
                </div>
            </Link>
            <button className='btn btn-dark w-100' onClick={() => addtocart(id)}>Add To Cart {cartitemamount > 0 && <>({cartitemamount})</>}</button>  
      </div>
    )
}

export default Myproductpage