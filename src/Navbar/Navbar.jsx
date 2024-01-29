import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Components/Assets/logo.png';
import searchicon from '../Components/Assets/sear.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState('Home')
    return (
        <div className='navbar'>
            <div className="navbara-logo-container">
                <img src={logo} />
                <p>Food Line</p>
            </div>
            <ul>
                <li onClick={() => setMenu('home')}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>{menu === 'home' ? <hr></hr> : <></>}</li>
                <li onClick={() => setMenu('veg')}><Link to='/veg' style={{ textDecoration: 'none', color: 'white' }}>Veg</Link>{menu === 'veg' ? <hr></hr> : <></>}</li>
                <li onClick={() => setMenu('non-veg')}><Link to='/non-veg' style={{ textDecoration: 'none', color: 'white' }}>Non-Veg</Link>{menu === 'non-veg' ? <hr></hr> : <></>}</li>
                <li onClick={() => setMenu('chinese')}><Link to='/chinese' style={{ textDecoration: 'none', color: 'white' }}>Chinease</Link>{menu === 'chinese' ? <hr></hr> : <></>}</li>
                <li onClick={() => setMenu('table-booking')}><Link to='/tablebooking' style={{ textDecoration: 'none', color: 'white' }}>Book table</Link>{menu === 'table-booking' ? <hr></hr> : <></>}</li>
            </ul>
            <div className="navbar-recipe-search">
                <div className="navbar-recipe-search-span">
                    <span>Search</span>
                </div>
                <div className='searchicon'><Link to='/searchedelement'><img src={searchicon} /></Link></div>
            </div>

            <div className="navbar-login-signup-container">
                <Link to='/login' style={{textDecoration:'none'}}>
                <div className="login-container">
                    <span>Login</span>
                </div>
                </Link>
                <Link to='/signup' style={{textDecoration:'none', color:'white'}}>
                <div className="signup-container">
                    <span>Signup</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Navbar