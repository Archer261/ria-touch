import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdKeyboardBackspace } from 'react-icons/md'

import './Navbar.css'

import images from '../../constants/images'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.ria} alt="app logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#services'>Services</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
                <li className='p__opensans'><a href='#home'>Home</a></li>
            </ul>
            <div className='app__navbar-call'>
                <a href="#" className='p__opensans'><img src={images.phone} /></a>
                <div />
                <a href='/' className='p__opensans'>Book Appointment</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#a82b7d' fontSize={27} onClick={() => setToggleMenu(true)} />


                {toggleMenu && (

                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdKeyboardBackspace fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#about'>About</a></li>
                            <li className='p__opensans'><a href='#services'>Services</a></li>
                            <li className='p__opensans'><a href='#contact'>Contact</a></li>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                        </ul>
                    </div>
                )}

            </div>

        </nav>
    )
}

export default Navbar