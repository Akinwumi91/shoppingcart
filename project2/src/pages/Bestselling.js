import React from 'react'
import { Link } from 'react-router-dom'

const Bestselling = (props) => {
    const{id, name, image, price, rate} = props.data
  return (
    <div className='bestselling'>
        <Link to={`/home/${id}`} className="card ">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <button className='btn btn-dark w-100'>Add To Cart</button>
            </div>
        </Link>
    </div>
  )
}

export default Bestselling