import React from 'react'
import loginbackground from '../Assets/loginbackground.webp';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="login-parent">

                <div className="login-left">

                </div>
                <div className="login-right">

                </div>
            </div>
            <div className="login-image-continer">
                <img src={loginbackground} />
            </div>
            <div className="login-info-container">
                <h2>Login</h2>
                <div className="login-input-container">
                    <label>
                        Email:
                        <br />
                        <input type="email" />
                    </label>
                </div>
                <div className=" login-input-container">
                    <label>
                        Password:
                        <br />
                        <input type="password" />
                    </label>
                </div>
                <button className="login-button">Login</button>
            </div>

        </div>
    )
}

export default Login
