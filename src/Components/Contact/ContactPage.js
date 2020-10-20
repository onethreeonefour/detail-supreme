import React from 'react';
import AboutUs from '../../Images/about-us.webp'

function ContactPage() {
    return (
        <div className="contact-container">
            <h1 className="heading-txt">Contact Us</h1>
            <div className="contact-form-container">
                <div className="about-us">
                    <img src={AboutUs} alt="about-us" className="about-us-img"></img>
                    <h2>About Us</h2>
                    <p>We've been in the business since 2007 and serviced from the most extravagant exotic cars from Aston Martins to Ferraris but we also serve any customer with the love of their car.
                    <br /><br />Trust in <span className="detail-supreme">Detail Supreme</span> for your car detailing services.
                    </p>
                </div>
                <div className="contact-form-input">
                    <h2>Contact Us</h2>
                    <div className="contact-el">
                        <label>Name</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Enquiry</label>
                        <textarea></textarea>
                    </div>
                    <div className="button-container">
                        <button>Send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage
