import React from 'react'
import ServiceCart from '../ui/ServiceCart'
import icon1 from "../assets/icons/service-team.svg"
import icon2 from "../assets/icons/service-mobile.svg"
import icon3 from "../assets/icons/service-erp.svg"
import icon4 from "../assets/icons/service-design.svg"
import icon5 from "../assets/icons/service-setting.svg"
import icon6 from "../assets/icons/service-it.svg"


const Services = () => {
  return (
    <div id='services' className='mb-[80px] ' >
        <h1 className='title' >Our services</h1>
        <div className='grid grid-cols-3 w-full gap-[30px] ' >
            <ServiceCart icon={icon1} content={'Team'} />
            <ServiceCart icon={icon2} content={'Development of mobile applications'} />
            <ServiceCart icon={icon3} content={'Development and implementation ERP systems'} />
            <ServiceCart icon={icon4} content={'User interface, User experience design'} />
            <ServiceCart icon={icon5} content={'Optimization IT consulting infrastructure'} />
            <ServiceCart icon={icon6} content={'IT consulting'} />
        </div>
    </div>
  )
}

export default Services