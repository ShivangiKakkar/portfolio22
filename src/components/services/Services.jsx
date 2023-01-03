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
            <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
          </ul>
        </article>
        {/* END OF  Website Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
          </ul>
        </article>
        {/* END OF  Backend Development*/}

        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>xdjnksbbdjkc sakdbkalsjbdkla badjkabd k</p>
            </li>
          </ul>
        </article>
        {/* END OF  Data Analysis*/}
      </div>
    </section>
  )
}

export default Services