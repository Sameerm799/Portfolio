import React from 'react'
import RE from '../../assests/resume.pdf'

const Resume = () => {
  return (
    <div className='resume'>
        <a href={RE} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default Resume