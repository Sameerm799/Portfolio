import React from 'react'
import RE from '../../assests/resume.pdf'

const Resume = () => {
  return (
    <div className='resume'>
        <a href={RE} download className='btn'>Check Out My Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Resume