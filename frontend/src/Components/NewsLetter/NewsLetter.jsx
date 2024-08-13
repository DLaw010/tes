import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exculusive Offer on Your Email</h1>
            <p>subscribe to our newlatter and stay update</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;