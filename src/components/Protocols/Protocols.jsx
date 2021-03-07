import React from 'react'
import image1 from '../../resources/image1.jpg'
import image2 from '../../resources/image2.jpg'

export default function Protocols() {
    return (
        <div className="safety-section">
            <h2>Safety measures</h2>
            <div className="safety-cards-container">
                <div className="safety-cards-vertical-container">
                    <div className="safety-card-vertical">
                        <img 
                        src={image1} 
                        alt="image for safety" />
                        <h5>Heading of text</h5>
                        <p>some text about image</p>
                    </div>
                </div>
                <div className="safety-cards-horizontal-container">
                    <div className="safety-card-horizontal" >
                        <img className="safety-card-horizontal-image" 
                        src={image2} 
                        alt="image for safety" />
                        <h5>Heading of text</h5>
                        <p>some text about image some text about 
                            image some text about image some 
                            text about image some text about image
                            some text about image</p>
                    </div>
                    <div className="safety-card-horizontal" >
                        <img className="safety-card-horizontal-image" 
                        src={image2} 
                        alt="image for safety" />
                        <h5>Heading of text</h5>
                        <p>some text about image some text about 
                            image some text about image some 
                            text about image some text about image
                            some text about image</p>
                    </div>
                    <div className="safety-card-horizontal" >
                        <img className="safety-card-horizontal-image" 
                        src={image2} 
                        alt="image for safety" />
                        <h5>Heading of text</h5>
                        <p>some text about image some text about 
                            image some text about image some 
                            text about image some text about image
                            some text about image</p>
                    </div>
                    <div className="safety-card-horizontal" >
                        <img className="safety-card-horizontal-image" 
                        src={image2} 
                        alt="image for safety" />
                        <h5>Heading of text</h5>
                        <p>some text about image some text about 
                            image some text about image some 
                            text about image some text about image
                            some text about image</p>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}
