import React, { useRef } from 'react';
import Deal from '../Deal/DealPage';
import GalleryPage from '../Gallery/GalleryPage';
import Contact from '../Contact/ContactPage'
import Testimonial from '../Testimonial/Testimonials'
import BMW from '../../Images/bmw_m3.webp'
import SLK_RED from '../../Images/slk-red.webp'
import GTR_ORANGE from '../../Images/gtr-orange.webp';
import SHELBY from '../../Images/shelby.webp';

function LandingPage() {

    const contact = useRef('');
    const deal = useRef('');

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    return (
        <div>
            <div className="hero">
                <div className='hero-container'>
                    <div className="call-to-action">
                        <h1>Detail Supreme</h1>
                        <h2>Professional Grade Car Detailing</h2>
                        <p>Sydney's Premier Mobile Car Detailing Service</p>
                        <div >
                            <button className="cta-button cta-1" onClick={() => scrollToRef(deal)}>Our Deals</button>
                            <button className="cta-button cta-2" onClick={() => scrollToRef(contact)}>Contact Us</button>
                        </div>
                    </div>
                    <div className="hero-image-grid">
                        <div className="hero-image hero-image-1"><img src={GTR_ORANGE} alt="gtr"></img></div>
                        <div className="hero-image"><img src={BMW} alt="m3"></img></div>
                        <div className="hero-image"><img src={SLK_RED} alt="amg"></img></div>
                        <div className="hero-image"><img src={SHELBY} alt="shelby"></img></div>
                    </div>
                </div>
            </div>
            <div ref={deal}>
                <Deal
                    deal={contact}
                />
            </div>
            <div>
                <GalleryPage />
            </div>
            <div>
                <Testimonial />
            </div>
            <div ref={contact}>
                <Contact />
            </div>
        </div>
    )
}

export default LandingPage
