import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeaderService } from '../components/HeaderService/HeaderService'
import { FooterServices } from '../components/FooterServices/FooterServices'
import { TransportContent } from '../components/TransportContent/TransportContent'

export const Transport = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeaderService/>
        <TransportContent/>
        <FooterServices/>
        <Footer/>
    </div>
  )
}
