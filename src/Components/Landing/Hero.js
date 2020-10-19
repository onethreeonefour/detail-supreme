import React from 'react'
import BMW from '../../Images/bmw_m3.webp'
import SLK_RED from '../../Images/slk-red.webp'
import GTR_ORANGE from '../../Images/gtr-orange.webp';
import SHELBY from '../../Images/shelby.webp';


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
                <div className="hero-image"><img src={GTR_ORANGE} alt="hero-image"></img></div>
                <div className="hero-image"><img src={BMW} alt="hero-image"></img></div>
                <div className="hero-image"><img src={SLK_RED} alt="hero-image"></img></div>
                <div className="hero-image"><img src={SHELBY} alt="hero-image"></img></div>
            </div>
        </div>
    )
}

export default Hero
