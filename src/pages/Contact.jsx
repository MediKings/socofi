import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { ContactContent } from '../components/ContactContent/ContactContent'

export const Contact = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <ContactContent/>
      <Footer/>
    </div>
  )
}
