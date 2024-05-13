import React from 'react'
import './HeaderService.css'
import { Link } from 'react-router-dom'

export const HeaderService = () => {
  return (
    <div className="HeaderService">
        <div className='container py-5 mt-5'>
            <p className="col-12 mb-3">
                <small>AREAS OF INTERVENTION</small> <br />
                <small><Link to={"/infrastructure"} >Infrastructure Financing</Link></small> <br />
                <small><Link to={"/telecommunication"} >Telecommunications</Link></small> <br />
                <small><Link to={"/transport"} >Transport</Link></small> <br />
                <small><Link to={"/environment"} >Environment</Link></small> <br />
                <small><Link to={"/energy"} >Energy</Link></small> <br />
                <small><Link to={"/support"} >Support</Link> </small>
            </p>
        </div>
        <div className="bg"></div>
    </div>
  )
}
