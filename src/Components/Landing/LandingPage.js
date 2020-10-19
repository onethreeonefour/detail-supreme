import React from 'react';
import Hero from './Hero';
import Deal from '../Deal/DealPage';
import GalleryPage from '../Gallery/GalleryPage'

function LandingPage() {
    return (
        <div>
            <div className="hero">
                <Hero />
            </div>
            <div>
                <Deal />
            </div>
            <div>
                <GalleryPage />
            </div>
        </div>
    )
}

export default LandingPage
