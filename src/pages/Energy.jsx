import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeaderService } from '../components/HeaderService/HeaderService'
import { FooterServices } from '../components/FooterServices/FooterServices'
import { EnergyContent } from '../components/EnergyContent/EnergyContent'

export const Energy = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeaderService/>
        <EnergyContent/>
        <FooterServices/>
        <Footer/>
    </div>
  )
}
