import React from 'react'
import { Phone } from 'phosphor-react'
import { EnvelopeSimple } from 'phosphor-react'


const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactinner d-flex'>
      <div className='info'>
        <div>
        <h3><Phone size={32} className=' bg-danger rounded-circle' /> Call To Us</h3>
        <p>Phone +234123456789</p>
        <p>we are available 24/7</p>
        </div>

        <div>
        <h3><EnvelopeSimple size={32} className=' bg-danger rounded-circle' /> Write To Us</h3>
        <p>Fill Out form and we will responde withing 24hr</p>
        <p>Email: support@exclusive.com</p>
        </div>
      </div>
      <div className='textus'>
      <form className='d-flex justify-content-center align-center flex-column'>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Name' />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Email' />
          </div>
          
          <div className='form-floating'>
            <textarea className='form-control' placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          
          <div className='mt-3 text-center'>
          <button type="submit" className="btn btn-danger w-50 border border-dark">Send Message</button>
          </div>
     </form>
      </div>
      </div>
    </div>
  )
}

export default Contact