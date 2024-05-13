import React from 'react'
import { NetworkContent } from '../components/NetworkContent/NetworkContent'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

export const Network = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <NetworkContent/>
      <Footer/>
    </div>
  )
}
