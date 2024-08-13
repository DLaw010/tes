import React from 'react';
import './Hero.css'

import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image1.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <br /><br /><br />
                <h2>Toko Online Shoesmart</h2>
                <div>
                    <div className="hero-hand-icon"></div>
                        <p>Selamat datang di website sepatu</p>
                    
                    <p>Shoesmart. Toko sepatu bayi</p>
                    <p>Termurah dan Terlengkap di</p>
                    <p>Bogor.</p>
                </div>
                <div className="hero-latest-btn">
                <div>Belanja sekarang!</div>
                <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right"><br /><br /><br />
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
};

export default Hero;