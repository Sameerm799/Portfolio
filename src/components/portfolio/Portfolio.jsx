import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/imgt3.jpg'
import { Autoplay, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

const data = [
  {
    id:1, 
    image: IMG1,
    title: 'Web development',
    github: 'https://github.com',
    demo:'https://github.com'
  },
  {
    id:2, 
    image: IMG1,
    title: 'Web development',
    github: 'https://github.com',
    demo:'https://github.com'
  },
  {
    id:3, 
    image: IMG1,
    title: 'Web development',
    github: 'https://github.com',
    demo:'https://github.com'
  },
]
//replaced article with SwiperSlide
//replaced div with Swiper
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container"
      modules={[Autoplay, Pagination]}
      spaceBetween={40}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      
      >
        {data.map(({id, image, title, github, demo}) => {
          return(
            <SwiperSlide key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>    
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Portfolio