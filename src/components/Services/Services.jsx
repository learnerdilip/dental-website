import React from 'react'
import braces from '../../resources/braces.png'
import anesthetic from '../../resources/anesthetic.png'
import broken from '../../resources/broken.png'
import brushing from '../../resources/brushing.png'
import caries from '../../resources/caries.png'
import cleaning from '../../resources/cleaning.png'
import dentalcare from '../../resources/dentalcare.png'
import dentures from '../../resources/dentures.png'
import extraction from '../../resources/extraction.png'
import implant from '../../resources/implant.png'
import medication from '../../resources/medication.png'
import xray from '../../resources/xray.png'


export default function Services() {
    return (
        <div className="services-section">
            <h2>Services offered</h2>
            <div className="service-cards">
                <div className="services-card top-card top-left-card">
                    <img className="services-card-image" src={braces} />
                    <p>braces</p>
                </div>
                <div className="services-card top-card">
                    <img className="services-card-image" src={anesthetic} />
                    <p>anesthetic</p>
                </div>
                <div className="services-card top-card">
                    <img className="services-card-image" src={broken} />
                    <p>broken</p>
                </div>
                <div className="services-card top-card">
                    <img className="services-card-image" src={brushing} />
                    <p>brushing</p>
                </div>
                <div className="services-card top-card">
                    <img className="services-card-image" src={caries} />
                    <p>caries</p>
                </div>
                <div className="services-card top-card top-right-card">
                    <img className="services-card-image" src={cleaning} />
                    <p>cleaning</p>
                </div>
                <div className="services-card bottom-card bottom-left-card">
                    <img className="services-card-image" src={dentalcare} />
                    <p>dentalcare</p>
                </div>
                <div className="services-card bottom-card">
                    <img className="services-card-image" src={dentures} />
                    <p>dentures</p>
                </div>
                <div className="services-card bottom-card">
                    <img className="services-card-image" src={extraction} />
                    <p>extraction</p>
                </div>
                <div className="services-card bottom-card">
                    <img className="services-card-image" src={implant} />
                    <p>implant</p>
                </div>
                <div className="services-card bottom-card">
                    <img className="services-card-image" src={medication} />
                    <p>medication</p>
                </div>
                <div className="services-card bottom-card bottom-right-card">
                    <img className="services-card-image" src={xray} />
                    <p>xray</p>
                </div>
            </div>
        </div>
    )
}
