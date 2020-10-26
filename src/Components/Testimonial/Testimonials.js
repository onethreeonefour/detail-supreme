import React, { useEffect } from 'react'
import { testimonials } from './TestimonialsData'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Testimonials() {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.testimonials-card-image-anim', {
            scrollTrigger: {
                trigger: '.testimonials-card-image-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: -50, stagger: 0.4
        });

        gsap.from('.testimonials-card-quote-anim', {
            scrollTrigger: {
                trigger: '.testimonials-card-quote-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, x: -50, stagger: 0.4
        });
    }, [])

    const renderCards = testimonials.map((data, index) => {
        return <div key={index} className="testimonials-card">
            <div>
                <img src={data.src} alt="avatar" className="testimonials-card-image-anim"></img>
            </div>
            <h2>{data.name}</h2>
            <p className="testimonials-card-quote-anim">{data.quote}</p>
        </div>
    })

    return (
        <div className="testimonials-page-container ">
            <h1 className="heading-txt">Testimonials</h1>
            <div className="testimonials-container" >
                {renderCards}
            </div>
        </div>
    )
}

export default Testimonials
