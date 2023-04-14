import React from 'react'
import Works from './Works'
import { projectsData } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const Portfolio = () => {
  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Works</span>
      
      <Swiper className="work__container container grid"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {projectsData.map(item => {
          return (
            <SwiperSlide>
              <Works item={item} key={item.id} />
            </SwiperSlide>
        )})}
      </Swiper>
    </section>
  )
}