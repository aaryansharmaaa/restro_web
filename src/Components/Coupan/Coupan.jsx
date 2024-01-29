import React from 'react'
import './Coupan.css';

const Coupan = () => {
  return (
    <div className='coupan'>
        <h1>Plese enter your email to get offer on your mail...</h1>
        <h2>enter your mail and subscribe to our website</h2>
        <div className='coupan-container'>
            <input type="text" placeholder='enter your email....' />
            <button>Submit</button>
        </div>
      
    </div>
  )
}

export default Coupan
