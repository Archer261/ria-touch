import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Ria.css'

const Ria = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.riaPhoto} alt='ria photo' style={{ width: '70%', height: 'auto' }} />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Ria's Touch - Humble Beginnings" dark={true} />
        <h1 className='headtext__cormorant_dark'>
          Singapore Transplant Becomes Shelby Massage Queen!
        </h1>

        <div className='app__ria-content'>
          {/* <div className='app__ria-content_quote'>

</div> */}
          <p className='p__opensans_dark'>
            Ria Schodowski a licensed Massage therapist decided to switch gears and become a massage therapist, she never expected her enterprise to grow so much so quickly. Her massage business, Ria's Touch, has grown tremendously since 2008. In addition to providing massages for clients in her office and on location, Schodowski sells her own line of organic lotions for aromatherapy.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Ria