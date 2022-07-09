import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h1>Services</h1>

      <div className="container services__container">
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Devlopment</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Utilizing HTML/CSS/Javascript, React, Bootstrap, and PHP 
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Database development with user login authenticaiton
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Maintain devloped websites, introducing new learnings 
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Plan frontend and backend design, user experience driven
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Java and C#</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Developing web application with C#, using MS SQL and .NET
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Understanding of object-oriented design and data strucutes 
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Produce detailed project documentation for clients and teams
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Fix bug issues and implement new requests made by clients and teams
              </p>
            </li>
      
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Game Development</h3>
          </div>
         <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Creating 2D and 3D worlds in both Unity and Unreal Engine
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Developing scripts for player interaction, collision, and death triggers 
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Implementing enemy AI detection system and movement patterns
              </p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Creating user interface, level design, and fluid system functionality
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services