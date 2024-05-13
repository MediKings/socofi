import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeaderService } from '../components/HeaderService/HeaderService'
import { FooterServices } from '../components/FooterServices/FooterServices'
import { EnvirContent } from '../components/EnvirContent/EnvirContent'

export const Environment = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeaderService/>
        <EnvirContent/>
        <FooterServices/>
        <Footer/>
    </div>
  )
}
