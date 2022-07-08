import React from 'react'
import './portfolio.css'
import IMG2 from '../../assests/imgclass.JPG'
import IMG3 from '../../assests/game1.png'
import { Autoplay, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

const data = [
  {
    id:1, 
    image: IMG3,
    title: 'Abu La La Land',
    desc:'This was my first game I ever made. Using Unity and C#.',
    github: 'https://github.com/Sameerm799/Abu-La-La-Land',
  },
  {
    id:2, 
    image: IMG2,
    title: 'KPU MY Action Plan Clone',
    desc:'This web application has user login and preview their courses, comments, and course offers. Using PHP and MySQL.',
    github: 'https://github.com/Sameerm799/MAP-Project-INFO3150',
  },
  {
    id:3, 
    image: IMG2,
    title: 'React Native Applications',
    desc: '',
    github: 'https://github.com',
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
        {data.map(({id, image, title, desc, github}) => {
          return(
            <SwiperSlide key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>    
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'target='_blank'>Github</a>
            {/*<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
          </div>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Portfolio