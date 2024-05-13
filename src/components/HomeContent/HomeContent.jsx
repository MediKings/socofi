import React from 'react'
import './HomeContent.css'
import { Link } from 'react-router-dom'
import { Social } from '../Social/Social'

export const HomeContent = () => {
  return (
    <main>
        <div className='container my-5 py-5'>
            <div className="row text-center">
                <div className="col-lg-4">
                    <h4>Save time</h4>
                    <p>Our teams analyze the details of each feasibility study, the profitability of the project and the guarantees provided by clients to ensure that the project is not rejected by our partner financial institutions</p>
                </div>

                <div className="col-lg-4">
                    <h4>Transparency and availability</h4>
                    <p>Our teams are always available by phone or e-mail to respond immediately to any customer requests during all phases of the project.</p>
                </div>

                <div className="col-lg-4">
                    <h4>Adapted solutions</h4>
                    <p>Thanks to our in-depth knowledge of our business sectors, the needs of our financial partners and the concerns of our clients, we offer tailored solutions in the field of financing and project implementation.</p>
                </div>
            </div>
        </div>

        <div className="area">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 text-center">
                        <h1 className='py-4 mb-4'>AREAS OF INTERVENTION</h1>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img01.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>INFRASTRUCTURE FINANCING</h5>
                                    <p>We offer public and private institutions advantageous solutions for the financing of all types of infrastructure projects and support from the beginning to the completion of the project.</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img02.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>TELECOMMUNICATIONS</h5>
                                    <p>The service offered by SOCOFI to public institutions makes it possible to connect the operators in a completely transparent way, without changing configurations and new MICs to existing equipment.</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img03.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>TRANSPORT</h5>
                                    <p>The deterioration of roads, the obsolescence of the land and maritime public transport fleet in Africa has led SOCOFI to set up a program to finance the renewal of the fleet of buses and public transport boats.</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img04.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>ENVIRONMENT</h5>
                                    <p>SOCOFI therefore presents solutions to the African country which consists of the prevention, cleaning and recovery of hydrocarbons.</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img05.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>ENERGY</h5>
                                    <p>Electrification by solar energy. The interested countries sign a Power Purchase Agreement (PPA) with SOCOFI for a period of 20 years.</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img src="/icones/img06.png" alt="image01" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>SUPPORT</h5>
                                    <p>Study of the project Search for financing Making projects profitable Human Resource Management Project Management Financial management</p>
                                    <Link to={"/"}>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="partners my-5 pb-5">
            <div className="container">
                <h2 className='text-center mb-5'>PARTNERS</h2>
                <div className="row m-0 text-center">
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img01.jpg" alt="" />
                    </div>
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img02.jpg" alt="" />
                    </div>
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img03.jpg" alt="" />
                    </div>
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img04.jpg" alt="" />
                    </div>
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img05.jpg" alt="" />
                    </div>
                    <div className="col-6 col-md-4 p-md-3">
                        <img src="/partners/img06.jpg" alt="" />
                    </div>
                </div>                
            </div>
        </div>

        <Social/>
    </main>
  )
}
