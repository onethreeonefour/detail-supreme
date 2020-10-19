import React from 'react'
import SLK from '../../Images/slk-gray.png'
import GTR from '../../Images/gtr-orange.png';


function Hero() {
    return (
        <div className='hero-container hero-grid'>
            <div className="call-to-action">
                <h1>Detail Supreme</h1>
                <h2>Professional Grade Car Detailing</h2>
                <p>Sydney's Premier Mobile Car Detailing Service</p>
                <div >
                    <button className="cta-button cta-1">Our Deals</button>
                    <button className="cta-button cta-2">Our Work</button>
                </div>
            </div>
            <div >
                <div className="hero-image"><img src={GTR} alt="hero-image"></img></div>
                <div className="hero-image"><img src={SLK} alt="hero-image"></img></div>
            </div>
        </div>
    )
}

export default Hero
