import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { InfrasContent } from '../components/InfrasContent/InfrasContent'
import { HeaderService } from '../components/HeaderService/HeaderService'
import { FooterServices } from '../components/FooterServices/FooterServices'

export const Infras = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeaderService/>
        <InfrasContent/>
        <FooterServices/>
        <Footer/>
    </div>
  )
}
