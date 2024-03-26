import React from 'react'
import { myproducts } from '../products'
import { Cartcontext } from '../context/Cartcontext'
import { useContext } from 'react'
import Cartitems from './Cartitems'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const{cartitems, gettotalamount} = useContext(Cartcontext)
  const totalamount = gettotalamount()
  const navigate = useNavigate()
  return (
    <div className='cart w-100'>
    <div className='d-flex justify-content-center'><h3>Your Cart Items</h3></div>

    <div className='cartitems'>
      {myproducts.map ((product) =>{
        if(cartitems[product.id] !== 0){
          return <Cartitems data={product} />
        }
      })}
    </div>

    {totalamount > 0 ?(
      <div className=' text-center p-3'>
        <p className='m-3'><b>Total: ${totalamount}</b></p>
        <button onClick={() => navigate("/")} className='m-3 btn btn-dark'>Continue Shopping</button>
        <button className='m-3 btn btn-dark'>Checkout</button>
      </div>
    ):(
      <h4 className='d-flex justify-content-center'>Your Cart Is Empty</h4>
    )}
    </div>
  )
}

export default Cart