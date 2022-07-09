import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h1>My Experience</h1>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
             <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>
        {/*End of Frontend */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
                <h4>SQL</h4>
              <small className='text-light'>Experinced</small>
            </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                    <h4>PHP</h4>
                  <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                    <h4>C#</h4>
                    <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                    <h4>C++</h4>
                    <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*end of Backend*/}

      </div>
    </section>
  )
}

export default Experience