import React from 'react'
import { useParams } from 'react-router-dom'
import { myproducts } from '../products';
import { Link } from 'react-router-dom'
import { FacebookLogo } from 'phosphor-react'
import {LinkedinLogo} from 'phosphor-react'
import {InstagramLogo} from 'phosphor-react'
import {TwitterLogo} from 'phosphor-react'
import { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import { Heart } from 'phosphor-react';


const Singleproduct = () => {
    const {id} = useParams();
    const post = myproducts.find(post => (post.id).toString() === id)
    const{addtocart, cartitems, addtofav} = useContext(Cartcontext)

    const cartitemamount = cartitems[id]
  return (
    <div className='singleproduct'>
      <article className='oneproduct'>
        {post && 
        <div className=' d-flex '>
          <div className='oneproductimg'>
          <img src={post.image} className="card-img-top" alt=''  />
          </div>
            <div className='discription card-body'>
                <h3 >{post.name}</h3>
                <p >${post.body}</p>
                <p>product code: <b>{post.productcode}</b></p>
                <div className='d-flex'><h4 >${post.price}</h4> <p className='heart' onClick={() => addtofav(post.id)}><Heart size={32} /></p></div>
                <p>Call us for Bulk Purchases: 07045112793</p>
                <button className='btn btn-dark w-100' onClick={() => addtocart(post.id)}>Add To Cart{cartitemamount > 0 && <>({cartitemamount})</>}</button>
                <p className='mt-5'>Same Day Delivery Available at: <span className='bg-danger rounded-pill p-1'>Lagos</span></p>
                <p>Share With Friends <div className='d-flex'>
                  <Link className='nav-link' to=''><FacebookLogo size={32} /></Link>
                  <Link className='nav-link' to=''><InstagramLogo size={32} /></Link>
                  <Link className='nav-link' to=''><TwitterLogo size={32} /></Link>
                  <Link className='nav-link' to=''><LinkedinLogo size={32} /></Link>
                </div></p>
            </div> 
        </div>

        }
      </article>
    </div>
  )
}

export default Singleproduct