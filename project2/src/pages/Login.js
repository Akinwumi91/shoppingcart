import React from 'react'
import basket from '../images/basket.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='signup'>
      <div className='innersign d-flex justify-content-center'>
      <div className='signupimg'>
        <img src={basket} alt='' height='500px'/>
      </div>

      <div className='signupform d-block justify-content-center'>
        <h3 className='d-flex justify-content-center'>Login to Exclusive</h3>
        <p>Enter your details below</p>


<form>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Email' />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
      </div>
      <div>
      <button type="submit" className="btn btn-danger w-100">Create Account</button>
      </div>
      <i>Create an account <button className='btn btn-light'><Link to='/signup'>Register</Link></button></i>
</form>
      </div>
      </div>
    </div>
  )
}

export default Login