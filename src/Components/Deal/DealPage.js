import React, { useEffect } from 'react'
import SLK from '../../Images/slk-red.webp'
import BMW from '../../Images/bmw_m3.webp'
import SHELBY from '../../Images/shelby.webp'
import Arrive from '../../Images/arrive.webp'
import Inspect from '../../Images/inspect.webp'
import Detailing from '../../Images/detailing.webp'
import Supra from '../../Images/supra.webp'
import Exterior from '../../Images/exterior.webp'
import Interior from '../../Images/interior.webp'
import Protection from '../../Images/protection.webp'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function DealPage(props) {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.process-anim', {
            scrollTrigger: {
                trigger: '.process-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: -50, stagger: 0.35
        });

        gsap.from('.services-anim', {
            scrollTrigger: {
                trigger: '.services-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: -50, stagger: 0.35
        });

    }, [])

    return (
        <div className="deal-page-container">
            <h1 className="heading-txt">Our Deals</h1>
            <div className='deal-card-container'>
                <div className='deal-card'>
                    <img src={SHELBY} alt='economy'></img>
                    <div className='deal-card-text'>
                        <h2>Economy Package</h2>
                        <p className="align-text-left deal-card-text">The Economy package by Detail Supreme gives your car the basic exterior cleaning and interior cleaning. Your car is first pressure washed with our state of the art machine to shake out all loose dirt and debris and finely lathered with our special house blend soap to remove imperfection in the paint. Your interior is then cleaned with our awarded winning carpet shampoo for maximum cleanliness and a fragance design by our chief engineer Pierre Rodriguez.</p>
                        <h3 className="align-text-center deal-card-text">$299</h3>
                        <button className="card-button" onClick={() => scrollToRef(props.deal)}>Book Now</button>
                    </div>
                </div>
                <div className='deal-card premium-card'>
                    <img src={BMW} alt='executive'></img>
                    <div className='deal-card-text'>
                        <h2>Executive Package</h2>
                        <p className="align-text-left deal-card-text">The Executive package is Detail Supreme most requested package from our loyal customers. This package includes all of the economy package but will include a careful inspection from our technicians to see if there's paint defects that we can correct. Cut and Polish can be used if necessary and finally your car will be protected with our in-house special all-terrain car wax that is formulated in Germany for maximum protection from rain, dust, mud and debris.</p>
                        <h3 className="align-text-center deal-card-text">$499</h3>
                        <button className="card-button card-premium-button" onClick={() => scrollToRef(props.deal)}>Book Now</button>
                    </div>
                </div>
                <div className='deal-card'>
                    <img src={SLK} alt='supreme'></img>
                    <div className='deal-card-text'>
                        <h2>Detail Supreme Package</h2>
                        <p className="align-text-left deal-card-text">The Detail Supreme package is the most extreme package we have - we skimp on no details what so ever. This package requires for your car to be driven to our workshop for maximum detailing by our chief technicians. We address everything from exterior, interior, and engine bay. We offer rechroming, polishing of engine internals - this is for cars wanting to be showroom ready. Detail Supreme has won many car shows with our detailing service with this</p>
                        <h3 className="align-text-center deal-card-text">$1499 - $3999</h3>
                        <button className="card-button" onClick={() => scrollToRef(props.deal)}>Book Now</button>
                    </div>
                </div>
            </div>
            <h1 className="heading-txt">How It Works</h1>
            <div className="process-container">
                <div className="process-card align-text-left process-anim">
                    <div>
                        <h4 className="lighter">1</h4>
                        <br />
                        <h2>We arrive at your home or business.</h2>
                        <p>Make sure we have easy access to water and a power outlet that is required for our services.</p>
                    </div>
                    <div className="process-card-image-container">
                        <img src={Arrive} alt="procedure"></img>
                    </div>
                </div>
                <div className="process-card align-text-left process-anim">
                    <div>
                        <h4 className="lighter">2</h4>
                        <br />
                        <h2>We determine the best course of action for your car.</h2>
                        <p>Not every job will be the same but here at Detail Supreme we treat every car the same and that it's your pride and joy.</p>
                    </div>
                    <div className="process-card-image-container">
                        <img src={Inspect} alt="procedure"></img>
                    </div>
                </div>
                <div className="process-card align-text-left process-anim">
                    <div>
                        <h4 className="lighter">3</h4>
                        <br />
                        <h2>We get to work. Go enjoy yourself!</h2>
                        <p>Our skill detailers get to work without skimping any details. Enjoy a coffee whilst we do our thing!</p>
                    </div>
                    <div className="process-card-image-container">
                        <img src={Detailing} alt="procedure"></img>
                    </div>
                </div>
                <div className="process-card align-text-left process-anim">
                    <div>
                        <h4 className="lighter">4</h4>
                        <br />
                        <h2>We leave your car looking showroom quality.</h2>
                        <p>Detail Supreme works hard to bring your car to the most pristine state - staking our reputation for the finest in Sydney.</p>
                    </div>
                    <div className="process-card-image-container">
                        <img src={Supra} alt="procedure"></img>
                    </div>
                </div>
            </div>
            <h1 className="heading-txt">Our Services</h1>
            <div className="services-container">
                <div className="services-card services-anim">
                    <div className="process-card-image-container">
                        <img src={Exterior} alt='exterior-clean'></img>
                    </div>
                    <h2>Exterior Clean</h2>
                    <p className="services-text">Using pressure controlled washer we clean the exterior of the car but before that happens we inspect the recommended pressure rate and appropriate soaps and solvents.</p>
                </div>
                <div className="services-card services-anim">
                    <div className="process-card-image-container">
                        <img src={Interior} alt='interior-clean'></img>
                    </div>
                    <h2>Interior Clean</h2>
                    <p className="services-text">Using a special lines of soaps and solvents we carefully clean every spot of your vehicle. Strange smells will be replaced with a fragrance worthy of royalty.</p>
                </div>
                <div className="services-card services-anim">
                    <div className="process-card-image-container">
                        <img src={Protection} alt='paint-protect'></img>
                    </div>
                    <h2>Paint Correction</h2>
                    <p className="services-text">Some vehicles need to go beyond a exterior wash that's why our technicians can also cut and polish your paint to remove all water stains and dull paint to reveal the original gloss.</p>
                </div>
            </div>
        </div>
    )
}

export default DealPage
