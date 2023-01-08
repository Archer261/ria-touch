import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Find.css'

const Find = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact" dark={true} />
        <h1 className='headtext__cormorant_dark' style={{ marginBotton: '3rem' }}>How to Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans_dark'>Van Dyke Ave Shelby Business Center,Suite 27
            51424 Van Dyke Ave Suite 27
            Shelby Twp, MI 48316</p>
          <p className='p__cormorant' style={{ color: "#DCCA87", margin: "2rem 2rem" }}>Hours</p>
          <p className='p__opensans_dark'>Mon 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Tues 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Wed 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Thurs 9:00 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Fri 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Sat 9:30 am - 3:00 pm</p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.gallery3} alt="location" />

      </div>
    </div>
  )
}

export default Find