import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem',
            backgroundColor: '#151515'
        }}>
            <p style={{ color: 'white' }}> By Terry Nguyen </p>
            <a href="http://lightontheland.net/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">lightontheland.net</a>
        </div>
    )
}

export default Footer
