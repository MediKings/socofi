import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Banner } from '../components/Banner/Banner'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'

export const Home = ({showMenu, setShowMenu}) => {
  return (
    <div className='pg'>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Banner/>
        <HomeContent/>
        <Footer/>
    </div>
  )
}
