import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'

const Cartitems = (props) => {
  const{ id, name, image, price } = props.data
  const{ cartitems, addtocart, removefromcart, cartcount} = useContext(Cartcontext)

  return (
    <div className='bestselling cartitems d-flex  justify-content-between'>
              <img src={image} className="" width='100px'  alt="..." />
              <div>
              <div className="card-body">
                  <p><b>{name}</b></p>
                  <p><b>${price}</b></p>
                </div>
              
               <button className='btn btn-dark btn-sm' onClick={() => removefromcart(id)}>-</button>  
               <input className='' onChange={(e) => cartcount(Number(e.target.value), id)} value={cartitems[id]} />  
               <button className='btn btn-dark btn-sm' onClick={() => addtocart(id)}>+</button>
              </div>  
      </div>
  )
}

export default Cartitems