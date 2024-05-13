import React from 'react'
import './AboutContent.css'
import { Social } from '../Social/Social'

export const AboutContent = () => {
  return (
    <div className="AboutContent">
        <div className='container py-5 mt-5'>
            <div className="row m-0">
                <div className="col-md-7 mb-3">
                    <h2 className='mb-3'>À propos de l'entreprise</h2>
                    <p>SOCOFI SL est une société espagnole créée en Espagne en 2010 pour apporter un soutien technique et financier aux institutions publiques et privées en Afrique dans le domaine du financement des infrastructures, des transports, de l'environnement, de l'énergie, des télécommunications et de la santé. SOCOFI SL travaille avec un réseau de banques, d'institutions financières, de fabricants et de constructeurs pour offrir à ses clients une solution clé en main.</p>
                </div>
                <div className="col-md-5 top-img">
                    <img src="/about/img1.jpg" alt="" />
                    <img src="/about/img2.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className="bg"></div>

        <div className="container py-5 items">
            <div className="row m-0">
                <div className="col-12 text-center my-5">
                    <h2 className='top-title'>Notre Philosophie</h2>
                </div>
                
                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-2">
                            <span className="nb">1</span>
                        </div>
                        <div className="col-10">
                            <h5 className="text">Gagner du temps</h5>
                            <p>Nos équipes analysent les détails de chaque étude de faisabilité, la rentabilité du projet et les garanties apportées par les clients pour s'assurer que le projet ne soit pas rejeté par nos institutions financières partenaires.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-2">
                            <span className="nb">2</span>
                        </div>
                        <div className="col-10">
                            <h5 className="text">Transparence et disponibilité</h5>
                            <p>Nos équipes sont toujours disponibles par téléphone ou par e-mail pour répondre immédiatement à toute demande client pendant toutes les phases du projet.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row m-0">
                        <div className="col-2">
                            <span className="nb">3</span>
                        </div>
                        <div className="col-10">
                            <h5 className="text">Des solutions adaptées</h5>
                            <p>Grâce à notre connaissance approfondie de nos secteurs d’activité, des besoins de nos partenaires financiers et des préoccupations de nos clients, nous proposons des solutions sur mesure en matière de financement et de réalisation de projets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Social/>
    </div>
  )
}
