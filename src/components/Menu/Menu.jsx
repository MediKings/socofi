import React from 'react'
import './Menu.css'
import { Link, NavLink } from 'react-router-dom'

export const Menu = ({showMenu, setShowMenu}) => {
  return (
    <div className={showMenu?'Menu show':'Menu hide'}>
        <ul className="nav flex-column">
          <h3 className="title mt-4 p-2">MENU</h3>
            <li className="nav-item"><NavLink to={"/"}  onClick={() => { setShowMenu(!showMenu) }} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></li>
            <li className="nav-item"><NavLink to={"/about"}  onClick={() => { setShowMenu(!showMenu) }} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink></li>
            <li className="nav-item sub-menu">
                <Link to={"#"} className='nav-link'>Services</Link>
                <ul className="nav flex-column sub-menu-items">
                  <li className="nav-item"><Link to={"/infrastructure"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Infrastructure Financing</Link></li>
                  <li className="nav-item"><Link to={"/telecommunication"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Telecommunications</Link></li>
                  <li className="nav-item"><Link to={"/transport"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Transport</Link></li>
                  <li className="nav-item"><Link to={"/environment"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Environement</Link></li>
                  <li className="nav-item"><Link to={"/energy"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Energy</Link></li>
                  <li className="nav-item"><Link to={"/support"} onClick={() => { setShowMenu(!showMenu) }} className='nav-link'>Support</Link></li>
                </ul>
              </li>
            <li className="nav-item"><NavLink to={"/partners"}  onClick={() => { setShowMenu(!showMenu) }} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Partners</NavLink></li>
            <li className="nav-item"><NavLink to={"/network"}  onClick={() => { setShowMenu(!showMenu) }} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Networks</NavLink></li>
            <li className="nav-item"><NavLink to={"/contact"}  onClick={() => { setShowMenu(!showMenu) }} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink></li>
        </ul>
    </div>
  )
}
