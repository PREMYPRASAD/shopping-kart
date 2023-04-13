
import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Fresh Vegetables & Fruits at your doorstep
                </h1>
                <p>We deliver fresh vegetables & fruits at your doorstep.
                    We deliver fresh vegetables & fruits at your doorstep.
                </p>
            </div>
        </div>
    )
}

export default Footer
