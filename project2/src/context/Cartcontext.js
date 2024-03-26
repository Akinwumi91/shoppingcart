import React, { useState } from 'react'
import { myproducts } from '../products'
import { createContext } from 'react'

export const Cartcontext = createContext()

const getdefaultcart = () =>{
  let cart ={};
  for(let i = 1; i < myproducts.length + 1; i++){
    cart[i] = 0
  }
  return cart;
}

const CartcontextProvider = (props) => {
  const[cartitems, setcartitems] = useState(getdefaultcart())

  const addtocart = (id) =>{
    setcartitems(prev => ({...prev, [id]: prev[id] + 1}))
  }
  const addtofav = (id) =>{
    setcartitems(prev => ({...prev, [id]: prev[id] + 1}))
  }
  const removefromcart = (id) =>{
    setcartitems(prev => ({...prev, [id]: prev[id] - 1}))
  }
  const cartcount = (newamount, id) =>{
    setcartitems(prev => ({...prev, [id]: newamount}))
  }
  const gettotalamount = () =>{
    let totalamount = 0;
    for(const item in cartitems){
      if(cartitems[item] > 0){
        let iteminfo = myproducts.find((product) => product.id === Number(item));
      totalamount += cartitems[item] * iteminfo.price
      }
    }
    return totalamount;
  };

  const contextvalue = {cartitems, addtocart, addtofav, removefromcart, cartcount, gettotalamount}
  return (
    <Cartcontext.Provider value={contextvalue}>{props.children}</Cartcontext.Provider>
  )
}

export default CartcontextProvider