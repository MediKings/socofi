import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row justify-content-between align-items-center text-center m-0">
                <div className="col-lg-2">
                    <img src="/logo_footer.png" alt="" className='logo' />
                </div>
                <div className="col-lg-auto">
                    <img src="/text_footer.png" alt="" className='text' />
                </div>
                <div className="col-lg-2 mt-5 mt-lg-0 ">
                    <Link to={"/"}>Privacy policy</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
