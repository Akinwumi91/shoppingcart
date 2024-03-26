import React from 'react'
import { myproducts } from '../products'
import Favoriteitem from './Cartitems'
import { Cartcontext } from '../context/Cartcontext'
import { useContext } from 'react'

const Favorite = () => {
  const{cartitems} = useContext(Cartcontext)

  return (
    <div>
      <div className='cartitems'>
      {myproducts.map ((product) =>{
        if(cartitems[product.id] !== 0){
          return <Favoriteitem data={product} />
        }
      })}
    </div>
    </div>
  )
}

export default Favorite