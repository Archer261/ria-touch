import React from 'react'

import { SubHeading, ServiceItem } from '../../components'

import { images, data } from '../../constants'

import '../Services/Services.css'

const Services = () => {
    return (
        <div className='app__specialMenu flex__center section__padding' id="services">
            <div className='app__specialMenu-title'>
                <SubHeading title="Massage Packages" />
                <h1 className='headtext__cormorant'>Special Promotion</h1>
            </div>

            <div className='app__specialMenu-menu'>
                <div className='app__specialMenu-menu_left flex__center'>
                    <p className='app__specialMenu-menu_heading'>Massage Services</p>
                    <div className='app__specialMenu_menu_items'>
                        {data.services.map((service, index) => (
                            <ServiceItem key={service.title + index} title={service.title} packs={service.packs} />
                        ))}
                    </div>
                </div>


                <div className='app__specialMenu-menu_img'>
                    <img src={images.book} alt='book' />
                </div>


                <div className='app__specialMenu-menu_right flex__center'>
                    <p className='app__specialMenu-menu_heading'>Massage Packages</p>
                    <div className='app__specialMenu_menu_items'>
                        {data.packages.map((pkg, index) => (
                            <ServiceItem key={pkg.title + index} title={pkg.title} price={pkg.price} />
                        ))}
                    </div>
                </div>

            </div>


            <div style={{ marginTop: '15px' }}>
                <button type='button' className='custom__button'>Book Now</button>
            </div>

        </div>
    )
}

export default Services