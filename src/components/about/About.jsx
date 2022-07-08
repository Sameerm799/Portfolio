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
              <small>Personal and School projects</small>
            </article>
          </div>
          <p>I use my passion and drive to constantly build up my skills in developing. Whether its a personal porfolio or a Student Record Keeping System Database, the challenge is never too big. I can develop and maintain projects on my own and with groups. I wan't to use my skills to provide an unforgettable experience that people will never forget. </p>
          
          

        </div>
      </div> 
    </section>
  )
}

export default About