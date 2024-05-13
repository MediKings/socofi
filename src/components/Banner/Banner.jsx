import React from 'react'
import './Banner.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='Banner'>
      <Carousel 
        responsive={responsive}
        infinite={true}
        >
        <div className="inner">
          <img src="/banner_1.jpg" alt="banner_1" className='w-100' />
        </div>
        <div className="inner">
          <img src="/banner_2.jpg" alt="banner_1" className='w-100' />
        </div>
      </Carousel>
    </div>
  )
}
