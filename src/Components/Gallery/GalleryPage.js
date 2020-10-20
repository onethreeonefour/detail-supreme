import React, { useEffect } from 'react';
import Gallery from 'react-photo-gallery'
import { photos } from "./Photos";


function GalleryPage() {
    return (
        <div className="gallery-page-container">
            <h1 className="heading-txt">Our Work</h1>
            <div className="gallery">
                <Gallery photos={photos} />
            </div>
        </div>
    )
}

export default GalleryPage
