import React from 'react';
import './Navbar.css'; // Pastikan file CSS tersedia dan diimport dengan benar
import navlogo from '../../assets/logo1.png';
import navProfile from '../../assets/boy.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} alt="Logo" className="nav-logo" />
            <img src={navProfile} className='nav-profile' alt="Profile" />
        </div>
    );
};

export default Navbar;
