import React from 'react'

import './Header.css';
import { SubHeading } from "../../components";
import { images } from '../../constants'

const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <SubHeading title="We Are Here to Relax You!" />
                <h1 className='app__header-h1'>Rias Touch Massage</h1>
                <p className='p__opensans' style={{ margin: '2rem 0' }}>
                    We are committed to your long term health and well-being. Explore our studio on the following pages, and discover all the benefits you'll enjoy as one of our treasured clients.
                    <br />
                    We will reduce your aches and pains, but don't just think of our services as a therapeutic remedy. Our massage therapy and classes have preventative advantages, too. Enhance your health and improve your performance with our holistic treatments.
                </p>
                <button type='button' className='custom__button'>Explore Services</button>
            </div>

            <div className='app__wrapper_img'>
                <img src={images.welcome} alt="header img" />

            </div>
        </div>
    )
}

export default Header