import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = ({showMenu, setShowMenu}) => {
  return (
    <nav className="navbar">
        <Link to={"/"}>
            <img src="/logo.png" alt="Socofi logo" />
        </Link>
        <div className="links">
          <div className="bars d-lg-none" onClick={() => { setShowMenu(!showMenu) }}>
            <p className={showMenu?'p1':''}></p>
            <p className={showMenu?'p2':''}></p>
            <p className={showMenu?'p3':''}></p>
          </div>

          <ul className="nav d-none d-lg-flex">
              <li className="nav-item"><NavLink to={"/"} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></li>
              <li className="nav-item"><NavLink to={"/about"} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink></li>
              <li className="nav-item sub-menu">
                <Link to={"#"} className='nav-link'>Services</Link>
                <ul className="nav flex-column sub-menu-items">
                  <li className="nav-item"><Link to={"/infrastructure"} className='nav-link'>Infrastructure Financing</Link></li>
                  <li className="nav-item"><Link to={"/telecommunication"} className='nav-link'>Telecommunications</Link></li>
                  <li className="nav-item"><Link to={"/transport"} className='nav-link'>Transport</Link></li>
                  <li className="nav-item"><Link to={"/environment"} className='nav-link'>Environement</Link></li>
                  <li className="nav-item"><Link to={"/energy"} className='nav-link'>Energy</Link></li>
                  <li className="nav-item"><Link to={"/support"} className='nav-link'>Support</Link></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink to={"/partners"} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Partners</NavLink></li>
              <li className="nav-item"><NavLink to={"/network"} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Networks</NavLink></li>
              <li className="nav-item"><NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink></li>
          </ul>
        </div>
    </nav>
  )
}
