import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Array

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Modeling Climate Change using Big Data and Machine Learning',
    github: 'https://github.com',
    demo: 'https://docs.google.com/presentation/d/1YsgisSA9m66_RNMUovPiUja3lsIRXPyWI9gwuK8Mkp8/edit?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Machine Learning based Sudoku Solver',
    github: 'https://github.com/ShivangiKakkar/sudoku-solver',
    demo: 'https://docs.google.com/presentation/d/1tvwiqapdX9c-RgCTlFg7y4Ts73IwWlEyt0XAbbBkd6M/edit?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Threat Modeling - Research Project (Cybersecurity)',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A Journaling App using VueJS and TypeScript',
    github: 'https://github.com/ShivangiKakkar/TO-DO-LIST1',
    demo: 'https://github.com/ShivangiKakkar/TO-DO-LIST1'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Imitating Amazon online store using React',
    github: 'https://github.com/ShivangiKakkar/amazon-clone',
    demo: 'https://clone-461ef.web.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Home Rental Aggregator Database Project',
    Report: 'https://drive.google.com/file/d/19bkSckAb725Q0EgL_ck3oRfn9f6qEeEZ/view',
    demo: 'https://drive.google.com/file/d/19bkSckAb725Q0EgL_ck3oRfn9f6qEeEZ/view'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio