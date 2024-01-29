import React from 'react'
import './Hero.css';
import restaurentimage from '../Assets/restaurent-front.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={restaurentimage} />
        <div className='content-container'>
          <h3>"A restaurant is a place where you can sit down </h3>
          <h3>and relax, and let someone else do the cooking for you."</h3>
        </div>
        <button>Book Your Table Now</button>
    </div>
  )
}

export default Hero
