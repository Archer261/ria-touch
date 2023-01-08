import React from 'react'

import { images } from '../../constants'

import './About.css';

const About = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id="about">
      {/* <div className='app__aboutus-overlay flex__center'>
        <img src={images.bgRia} alt='bg' />
      </div> */}

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant_dark'>
            About Ria's Touch
          </h1>
          <img src={images.massage} alt="massage" className='massage__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_rose flex__center'>
          <img src={images.rose} alt='rose' />
        </div>

        <div className='app__aboutus-content_location'>
          <h1 className='headtext__cormorant_dark'>
            Location
          </h1>
          <img src={images.massage} alt="massage" className='massage__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default About