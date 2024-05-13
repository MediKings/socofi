import React from 'react'
import './PartnersContent.css'

export const PartnersContent = () => {
  return (
    <div className="container py-5 mt-5 PartnersContent">
        <h2 className="top-title text-center pb-3">Partners</h2>
        <hr />
        <h3 className='mx-2 mb-4'>Companies</h3>
        <div className="row m-0">
            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img01.jpg" alt="" />
                    <p>Ecologic additives for the Petroleum Industry “OILEA” is a spanish petrochemical company headquartered in Madrid specializing in the production and commercialization of Ecologic additives conglomerates of vegetable origin and biodegradable for the oil industry.
OILEA provides oil cleaning, oil recovery and remediation services to petroleum operators, storage, transport and refining companies.</p>
                </div>
            </div>
            
            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img02.jpg" alt="" />
                    <p>Spanish engineering company headquartered in Madrid, HICO offers the services, from turnkey projects to Engineering, work management maintenance and operation of facilities.
HICO offers products and services in all sectors; Construction, Oil & Gas, Energy, Chemicals, Food, Industry, Renewables.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img03.jpg" alt="" />
                    <p>Anhui Ankai Automobile Co., Ltd. is a Chinese automotive manufacturing company headquartered in Hefei, Anhui which specialises in the production of buses and coaches. Ankai's products include urban buses, regular coaches, sleeping berth coaches, bus and coach chassis and automotive components. Ankai also offers related repair and maintenance services. The company has three principal subsidiaries and distributes its products worldwide.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img04.jpg" alt="" />
                    <p>Anhui Jantlemarine engineering co.,ltd. is a Chinese automotive manufacturing company headquartered in Hefei, Anhui Jantle Marine Engineering Co. Ltd. (AHJT) is an Integrated Chinese Maritime Engineering and Project Management company offering turnkey solution to international clients keen to take advantage of very competitive prices while maintaining the highest quality standard in the conventional marine vessel and OSV market. Ever since its inception in 2006, Jantle Marine has successfully designed, constructed and delivered more than 140 units of various types of marine vessels to its international clients translating to a Billion dollar revenue in a span of 12 years In addition to Jantle Marine in-house capability and deliverables, the company is fully supported by five other medium and large scale shipyards in China bringing the total number of manpower under employment to 4000 proud to have built and successfully delivered any and all types of marine vessels including but not limited to Deck Cargo Barges, Tugboat, AHT & AHTS, PSV, ROV, Pipe-laying Ships, Accommodation/Crane Work Barges, DP3 capabilities, Product Tankers, General Cargo Ships, Semisubmersible Drilling Rigs, Jack Up Rigs, Drill Ships, FRP Ferry boat, Patrol boat, FPSO, FSO, LNG, LPG and Bulk Cement Carriers</p>
                </div>
            </div>
        </div>

        <hr />

        <h3 className='mx-2 mb-4'>Banks</h3>
        <p style={{color: "#00a0e3", padding: "0px 0px 20px"}}>Our partner banks offer advantages including competitive interest rates and repayment terms.
We select for each customer the bank that best meets his needs and we submit an offer mentioning the various fees and conditions.</p>

        <div className="row m-0">
            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img05.jpg" alt="" />
                    <p>China CITIC Bank is China’s seventh-largest lender in terms of total assets. The bank operates in almost 130 countries, and maintains a strong foothold on the mainland banking industry. The bank operates 78 branches in the mainland, and 622 sub-branches, located in economically developed regions of China.In total, there are 773 branch offices in China,</p>
                </div>
            </div>
            
            <div className="col-md-6">
                <div className="box">
                    <img src="/partners/img06.jpg" alt="" />
                    <p>China Export Credit Insurance Corporation (SINOSURE) is a state-funded policy-oriented insurance company established and supported by the state to promote China’s foreign economic and trade development and cooperation.
As of the end of 2017, the cumulative domestic and foreign trade and investment supported by SINOSURE exceeded USD 3.3 trillion; the accumulated number of customers served was 110,000; and claims paid had amounted to USD 10.8 billion. SINOSURE had also cooperated with more than 200 banks to facilitate export finance, and helped export companies obtain loans of over RMB 3 trillion.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
