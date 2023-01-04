import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='capabilities'>
      <h5>Areas of Knowledge and Experience</h5>
      <h2>Capabilities</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Well versed with the end-to-end development lifecycle of websites and web-apps on modern stacks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Passionate about design language and UX, which helps me translate ideas and briefs into natural, aesthetic front-end components</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Exposed to working on complex backend implementation and optimization problems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experienced in working with lean teams on large projects</p>
            </li>
          </ul>
        </article>
        {/* END OF  Website Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Data Science and Analytics</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient with the language of choice for Data Science and Analytics - Python and all the standard open source libraries and toolkits</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Skilled at the standard ETL and Data Definition process</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have hands-on experience and a keen interest in Applied Machine Learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have selected, adapted, trained and integrated multiple Machine Learning models on defined problem statements with real world data</p>
            </li>
          </ul>
        </article>
        {/* END OF  Backend Development*/}

        <article className="service">
          <div className="service__head">
            <h3>Non Technical Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am a persistent, persevering individual with an unquenchable thirst for learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Unshakeable work ethic - I do not stop till the work is done</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am an effective and empathetic communicator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Respect the importance of Teamwork and know when to ask for help</p>
            </li>
          </ul>
        </article>
        {/* END OF  Data Analysis*/}
      </div>
    </section>
  )
}

export default Services