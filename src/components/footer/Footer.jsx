import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {RxGithubLogo} from 'react-icons/rx'
import {GrLinkedin} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shivangi Kakkar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/shivangi.kakkar.3/" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/shivangikakkar/" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/shivangikakkar" target="_blank"><IoLogoTwitter/></a>
        <a href="https://github.com/ShivangiKakkar" target="_blank"><RxGithubLogo /></a>
        <a href="https://www.linkedin.com/in/shivangikakkar15/" target="_blank"><GrLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shivangi Kakkar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer