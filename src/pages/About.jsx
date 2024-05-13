import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { AboutContent } from '../components/AboutContent/AboutContent'
import { Footer } from '../components/Footer/Footer'

export const About = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <AboutContent/>
        <Footer/>
    </div>
  )
}
