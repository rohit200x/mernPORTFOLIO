import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
const About = () => {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <Typography><i>"Passionate about turning innovative ideas into reality through code and technology."
</i></Typography>
      </div>
      <div className='aboutContainer2'>
        <div>
          <img src="https://res.cloudinary.com/dmlswmzg6/image/upload/v1720340053/portfolio/fsnaeyll2zxitssiydyn.jpg" alt='kk' className='aboutAvatar'/>
          <Typography variant='h4' style={{margin:"1vmax",color:"black"}}>Rohit Shendurkar</Typography>
          <Typography>Web/Software Developer</Typography>
          <Typography style={{margin:"1vmax"}}>Electronics and Communication Undergraduate | IoT Specialist | Full-Stack Developer
</Typography>
        </div>
        <div>
          <Typography style={{
            
            textAlign:"right",
          }}
          >
            I am an enthusiastic Electronics and Communication undergraduate specializing in IoT. With a deep passion for coding and development, I excels in web development and software engineering. His technical expertise spans a variety of programming languages and frameworks, including Node.js, Python, Express, MongoDB, C++, JavaScript, Django, and Flask. I consistently demonstrates a strong commitment to innovation and excellence in his projects, making him a dynamic and versatile developer in the tech community.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About