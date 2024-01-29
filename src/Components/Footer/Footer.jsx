import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.png';
import whatsapp from '../Assets/whatsapplogo.png';
import pintrest from '../Assets/pintrestlogo.png';
import insta from '../Assets/instagramlogo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo}/>
        <p>Food line</p>
      </div>
      <ul className='footer-mid-list'>
        <li>About</li>
        <li>Location</li>
        <li>Report</li>
        <li>Restaurent</li>
        <li>Carrier</li>
      </ul>
      <ul>
        <li><img src={insta} /></li>
        <li><img src={whatsapp} /></li>
        <li><img src={pintrest} /></li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>@2023 All copyright reserved Food security Lisence #255225xsdr</p>
      </div>
    </div>
  )
}

export default Footer
