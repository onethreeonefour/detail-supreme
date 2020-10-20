import React from 'react'
import { testimonials } from './TestimonialsData'

function Testimonials() {

    const renderCards = testimonials.map((data, index) => {
        return <div key={index} className="testimonials-card">
            <div>
                <img src={data.src} alt="avatar"></img>
            </div>
            <h2>{data.name}</h2>
            <p><span className="quote">"</span>{data.quote}</p>

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
