import React from 'react'
import './style.scss'
import Content from '../../components/Content'
import Start from '../../components/Start'
import CompanySlider from '../../components/Company-Slider'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3356/3356179.png"

        />
      </Helmet>
      <Content />
      <Start />
      <CompanySlider />

    </div>
  )
}

export default About
