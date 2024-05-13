import React from 'react'
import './Social.css'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter } from 'react-icons/fa'

export const Social = () => {
  return (
    <div className='Social my-5'>
        <h2 className='text-center mb-3'>GET IN TOUCH</h2>
        <div className="d-flex justify-content-center">
            <span><FaTwitter/></span>
            <span><FaFacebookF/></span>
            <span><FaGooglePlusG/></span>
            <span><FaPinterestP/></span>
        </div>
    </div>
  )
}
