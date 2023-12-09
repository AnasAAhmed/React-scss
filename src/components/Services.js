import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
      <Carousel 
      infiniteLoop 
       autoPlay  
       showStatus={false}  
       showArrows={false} 
        interval={1000}  
      showThumbs={false}
      > 
        <div> 
            <img src={img1} alt="item 1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div> 
            <img src={img2} alt="item 2" />
            <p className='legend'>peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
