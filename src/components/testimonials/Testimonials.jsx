import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/LK.jpg'
import AVTR2 from '../../assets/JK.jpg'
// import AVTR3 from '../../assets/EC.jpg'
// import AVTR4 from '../../assets/KH.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
      avatar: AVTR1,
      name: 'Luke Crouch |  Privacy and Security Engineer at Mozilla',
      review: '“Shivangi has made several impactful contributions to the company and in the process has added immensely to her repertoire. . . . It is also praiseworthy that she resolved [a] plethora of challenges that cropped up during coding with minimal supervision.”',
  },
  {
      avatar: AVTR2,
      name: 'Jonathan Kingston | Security Developer at Mozilla',
      review: 'With minimal supervision, Shivangi was able to get steady progress and implement changes within some complex code. She was also able to manage and triage a large swathe of bugs and show an independence that we require as an organization.”',
  },
  // {
  //     avatar: AVTR3,
  //     name: 'Easwaran Chirakkal | Chair of Computer Science Dept., SUNY',
  //     review: 'Lorem ipsum dolor sit amet. A dignissimos ratione aut eligendi quasi ut internos asperiores. Ut laudantium atque est officia fugiat in corrupti reiciendis in autem quae et quae dolor sed libero dolore id quam possimus.',
  // },
  // {
  //     avatar: AVTR4,
  //     name: 'Kaitlin Hoffmann',
  //     review: 'Lorem ipsum dolor sit amet. A dignissimos ratione aut eligendi quasi ut internos asperiores. Ut laudantium atque est officia fugiat in corrupti reiciendis in autem quae et quae dolor sed libero dolore id quam possimus.',
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Another Perspective</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
            
      </Swiper>
    </section>
  )
}

export default Testimonials