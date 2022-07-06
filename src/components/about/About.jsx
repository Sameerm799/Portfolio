import React from 'react'
import './about.css'
import ME from '../../assests/me-about.webp'
import {IoMdSchool} from 'react-icons/io'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=''/>
          </div>
        </div>  

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Kwantlen Polythechnic University</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Kwantlen Polythechnic University</small>
            </article>   
            <article className="about__card">
              <AiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>Kwantlen Polythechnic University</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia ut ipsa molestias nemo, sunt magni, voluptatem doloremque nobis tempore molestiae ipsam sequi ad a ea delectus assumenda nesciunt quibusdam!</p>
          <a href='#contact' className='btn btn-primary'>Contact</a>
          

        </div>
      </div> 
    </section>
  )
}

export default About