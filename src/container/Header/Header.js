import React from 'react'

import './Header.css';
import { SubHeading } from "../../components";
import { images } from '../../constants'

const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <SubHeading />
            </div>

            <div className='app__wrapper_img'>

            </div>
        </div>
    )
}

export default Header