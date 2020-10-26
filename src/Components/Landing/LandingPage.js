import React, { useEffect, useRef } from 'react';
import Deal from '../Deal/DealPage';
import GalleryPage from '../Gallery/GalleryPage';
import Contact from '../Contact/ContactPage'
import Testimonial from '../Testimonial/Testimonials'
import BMW from '../../Images/bmw_m3.webp'
import SLK_RED from '../../Images/slk-red.webp'
import GTR_ORANGE from '../../Images/gtr-orange.webp';
import SHELBY from '../../Images/shelby.webp';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function LandingPage() {

    const contact = useRef('');
    const deal = useRef('');
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.call-to-action-anim', {
            scrollTrigger: {
                trigger: '.call-to-action-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: -50, stagger: 0.4
        });

        gsap.from('.hero-image-anim', {
            scrollTrigger: {
                trigger: '.hero-image-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: 80, stagger: 0.45
        });
    }, [])


    return (
        <div>
            <div className="hero">
                <div className='hero-container'>
                    <div className="call-to-action-anim call-to-action ">
                        <h1>Detail Supreme</h1>
                        <h2 className="call-to-action-anim">Professional Grade Car Detailing</h2>
                        <p className="call-to-action-anim">Sydney's Premier Mobile Car Detailing Service</p>
                        <div >
                            <button className="cta-button cta-1" onClick={() => scrollToRef(deal)}>Our Deals</button>
                            <button className="cta-button cta-2" onClick={() => scrollToRef(contact)}>Contact Us</button>
                        </div>
                    </div>
                    <div className="hero-image-grid">
                        <div className="hero-image hero-image-1 hero-image-anim"><img src={GTR_ORANGE} alt="gtr"></img></div>
                        <div className="hero-image hero-image-anim"><img src={BMW} alt="m3"></img></div>
                        <div className="hero-image hero-image-anim"><img src={SLK_RED} alt="amg"></img></div>
                        <div className="hero-image hero-image-anim"><img src={SHELBY} alt="shelby"></img></div>
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
