import React from 'react'
import './about.css'
import ME from '../../assests/hmmm.png'
import {MdOutlineSchool} from 'react-icons/md'
import {BsPen} from 'react-icons/bs'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h1>About Me</h1>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=''/>
          </div>
        </div>  

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <MdOutlineSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Kwantlen Polythechnic University</small>
            </article>
            <article className="about__card">
              <BsPen className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Gaming<br/>Drawing<br/>Gunpla</small>
            </article>   
            <article className="about__card">
              <AiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>Tesla Clone App<br/>2D Platformer<br/>Management Systems</small>
            </article>
          </div>
          <p>I use my passion and drive to constantly build up my skills in developing. Whether its a personal porfolio or a Student Record Keeping System Database, the challenge is never too big. I can develop and maintain projects on my own and with groups. I wan't to use my skills to provide an unforgettable experience that people will never forget. </p>
          
          <p>I am an absolute geek for tech and games. Love seeing new innovation and technology made daily. Gaming has been a passion since I was young, from sniping green shells in Mario Kart to learning line-ups in Valorant. I'm always looking for something new to enjoy.</p>

        </div>
      </div> 
    </section>
  )
}

export default About