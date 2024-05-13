import React from 'react'
import './TelecomContent.css'

export const TelecomContent = () => {
  return (
    <div className="TelecomContent">

        <div className="container items">
            <div className="row m-0">
                <div className="col-12 text-center my-5">
                    <h2 className='top-title'>Telecommunication</h2>
                </div>
                
                <div className="content">
                  <p>
                    Telecom traffic control and fraud detection solution. <br />
                    The service offered by SOCOFI to public institutions makes it possible to connect the operators in a completely transparent way, without changing configurations and new MICs to existing equipment. <br />
                    SOCOFI's system for managing and controlling operator interconnection traffic enables public institutions to have a reliable and efficient tool for billing interconnected operators, controlling received and transmitted calls, and ensuring quality service. fighting against fraud.
                    The administration and management software tool of our platform has been created to effectively control all of the following operations: fraud detection, identification of customer segments, user behavior, billing and payment strategies, .. .
                  </p>

                  <p className='mb-1'>Our service included:</p>
                  <ul>
                    <li>Systems and services for calculating the turnover of a GSM operator,</li>
                    <li>GSM traffic monitoring systems and services: Voice, SMS, DATA, Mobile Money,</li>
                    <li>CDR (Call Detail Record) consolidation system and services,</li>
                    <li>System and services for the supervision of GSM terminals and SIM cards.</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
