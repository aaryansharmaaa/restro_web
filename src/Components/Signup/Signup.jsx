import React from 'react'
import chefimage from '../Assets/loginchef.jpg';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup'>
      <div className="signup-background-image">
        <img src={chefimage} />
      </div>
      <div className="login-credential">
        <h1>Signup Page</h1>
        <div className="login-credential-input">
          <label>
            Name
            <br />
            <input type="text" name='name' />
          </label>
        </div>
        <div className="login-credential-input">
          <label>
            Email
            <br />
            <input type="text" name='name' />
          </label>
        </div>
        <div className="login-credential-input">
          <label>
            Phone Number
            <br />
            <input type="text" name='name' />
          </label>
        </div>
        <div className="login-credential-input">
          <label>
            Password
            <br />
            <input type="password" name='password' />
          </label>
        </div>
        <button className='signup-button'>Submit</button>
        <div className="footer-login">
          <input type="checkbox" /> <span>Click here to ascept the term and condition </span>
          <div className="footer-login-check">
            <p>Already have an account</p>
            <Link to='/login'>
              <span>Click here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
