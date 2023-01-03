import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years of Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Internships</h5>
              <small>5+ Internships</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p> 
            I’m excited to lend my abilities to process or solve problems for real-world benefits and transform 
            organizations through developing and updating front-end user interfaces, back-end software development, 
            and data analytics. The cornerstone of success in software development is listening, understanding and clearly 
            communicating with stakeholders to design and implement technology solutions. I’ve got this!! <br /><br />
            
            “Any sufficiently advanced technology is indistinguishable from magic” - Arthur C. Clarke
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About