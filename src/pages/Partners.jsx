import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { PartnersContent } from '../components/PartnersContent/PartnersContent'

export const Partners = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <PartnersContent/>
        <Footer/>
    </div>
  )
}
