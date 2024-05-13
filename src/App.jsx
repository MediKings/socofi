import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Partners } from './pages/Partners'
import { Menu } from './components/Menu/Menu'
import { About } from './pages/About'
import { Network } from './pages/Network'
import { Contact } from './pages/Contact'
import { Infras } from './pages/Infras'
import { Telecom } from './pages/Telecom'
import { Transport } from './pages/Transport'
import { Environment } from './pages/Environment'
import { Energy } from './pages/Energy'
import { Support } from './pages/Support'

export const App = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/about' element={<About showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/partners' element={<Partners showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/network' element={<Network showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/contact' element={<Contact showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/infrastructure' element={<Infras showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/telecommunication' element={<Telecom showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/transport' element={<Transport showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/environment' element={<Environment showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/energy' element={<Energy showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
        <Route path='/support' element={<Support showMenu={showMenu} setShowMenu={setShowMenu} />}></Route>
      </Routes>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}
