import React from 'react'
import SLK from '../../Images/slk-red.webp'
import Arrive from '../../Images/arrive.webp'
import Inspect from '../../Images/inspect.webp'
import Detailing from '../../Images/detailing.webp'
import Supra from '../../Images/supra.webp'

function DealPage() {
    return (
        <div className="deal-page-container">
            <h1 className="heading-txt">Our Deals</h1>
            <div className='deal-card-container'>
                <div className='deal-card'>
                    <img src={SLK}></img>
                    <div className='deal-card-text'>
                        <h2>Economy Package</h2>
                        <p className="align-text-left deal-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur diam sed dolor vehicula, eget cursus ligula congue. Nulla sollicitudin ullamcorper nunc, at dignissim dui malesuada eu. Quisque semper felis metus, laoreet laoreet magna mollis ac. Nam rutrum porta orci non porttitor. Etiam vel malesuada libero. Quisque ultricies tristique suscipit. Aliquam euismod sit amet est non pharetra. Cras tincidunt, urna vel convallis rutrum, elit nisi lobortis felis, eget sollicitudin magna urna vitae orci. Phasellus suscipit magna eget nunc consequat porttitor.</p>
                        <h3 className="align-text-center deal-card-text">$149</h3>
                        <button className="card-button">Book Now</button>
                    </div>
                </div>
                <div className='deal-card premium-card'>
                    <img src={SLK}></img>
                    <div className='deal-card-text'>
                        <h2>Executive Package</h2>
                        <p className="align-text-left deal-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur diam sed dolor vehicula, eget cursus ligula congue. Nulla sollicitudin ullamcorper nunc, at dignissim dui malesuada eu. Quisque semper felis metus, laoreet laoreet magna mollis ac. Nam rutrum porta orci non porttitor. Etiam vel malesuada libero. Quisque ultricies tristique suscipit. Aliquam euismod sit amet est non pharetra. Cras tincidunt, urna vel convallis rutrum, elit nisi lobortis felis, eget sollicitudin magna urna vitae orci. Phasellus suscipit magna eget nunc consequat porttitor.</p>
                        <h3 className="align-text-center deal-card-text">$299</h3>
                        <button className="card-button card-premium-button">Book Now</button>
                    </div>
                </div>
                <div className='deal-card'>
                    <img src={SLK}></img>
                    <div className='deal-card-text'>
                        <h2>Detail Supreme Package</h2>
                        <p className="align-text-left deal-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur diam sed dolor vehicula, eget cursus ligula congue. Nulla sollicitudin ullamcorper nunc, at dignissim dui malesuada eu. Quisque semper felis metus, laoreet laoreet magna mollis ac. Nam rutrum porta orci non porttitor. Etiam vel malesuada libero. Quisque ultricies tristique suscipit. Aliquam euismod sit amet est non pharetra. Cras tincidunt, urna vel convallis rutrum, elit nisi lobortis felis, eget sollicitudin magna urna vitae orci. Phasellus suscipit magna eget nunc consequat porttitor.</p>
                        <h3 className="align-text-center deal-card-text">$499</h3>
                        <button className="card-button">Book Now</button>
                    </div>
                </div>
            </div>
            <h1 className="heading-txt">How It Works</h1>
            <div className="process-container">
                <div className="process-card align-text-left">
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
                <div className="process-card align-text-left">
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
                <div className="process-card align-text-left">
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
                <div className="process-card align-text-left">
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
        </div>
    )
}

export default DealPage
