import React from 'react'
import Hero from '../Components/Hero/Hero'
import VideoHero from '../Components/VideoHero/VideoHero'
import Famous from '../Components/Famous/Famous'
import Offer from '../Components/Offer/Offer'
import Desert from '../Components/Desert/Desert'
import KidsSpecial from '../Components/KidsSpecial/KidsSpecial'
import Coupan from '../Components/Coupan/Coupan'

const Home = (props) => {
  return (
    <div>
      <Hero/>
      <VideoHero />
      <Famous setLoader={props.setLoader}/>
      <Offer/>
      <Desert />
      <KidsSpecial setLoader={props.setLoader}/>
      <Coupan/>
    </div>
  )
}

export default Home
