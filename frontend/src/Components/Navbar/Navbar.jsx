import React, { useContext, useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo1.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import pro from '../Assets/profile_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const { getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();
    const profileRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setMenu("shop");
        } else if (path === '/Shop') {
            setMenu("Shop");
        } else if (path === '/about_us') {
            setMenu("about_us");
        }
    }, [location]);

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const profileDropdownToggle = () => {
        setProfileDropdownVisible(!profileDropdownVisible);
    }

    const isAuthenticated = !!localStorage.getItem('auth-token');

    const handleProtectedClick = (path) => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(path);
        }
    }

    const handleMenuClick = (menuName, path) => {
        setMenu(menuName);
        handleProtectedClick(path);
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>Shoesmart</p>
            </div>
            <img className='nav-dropdown' onClick={dropdownToggle} src={nav_dropdown} alt="Menu" />
            <ul ref={menuRef} className='nav-menu'>
                <li className={menu === "shop" ? "active" : ""} onClick={() => handleMenuClick("shop", '/')}>
                    <div style={{ textDecoration: 'none', cursor: 'pointer' }}>Beranda</div> {menu === "shop" ? <hr /> : null}
                </li>
                <li className={menu === "Shop" ? "active" : ""} onClick={() => handleMenuClick("shop", '/Shop')}>
                    <div style={{ textDecoration: 'none', cursor: 'pointer' }}>Belanja</div> {menu === "Shop" ? <hr /> : null}
                </li>
                <li className={menu === "about_us" ? "active" : ""} onClick={() => handleMenuClick("about_us", '/about_us')}>
                    <div style={{ textDecoration: 'none', cursor: 'pointer' }}>Tentang Kami</div> {menu === "about_us" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                {!isAuthenticated && (
                    <Link to='/login'><button>Login</button></Link>
                )}
                {isAuthenticated && (
                    <div className="nav-profile" onClick={profileDropdownToggle} ref={profileRef}>
                        <img src={pro} alt="Profile" />
                        {profileDropdownVisible && (
                            <ul className='nav-profile-dropdown'>
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to='/favorit'>Favorit</Link></li>
                                <li>
                                    <button onClick={() => {
                                        localStorage.removeItem('auth-token');
                                        window.location.replace('/');
                                    }}>Logout</button>
                                </li>
                            </ul>
                        )}
                    </div>
                )}
                <img src={cart_icon} alt="Cart" onClick={() => handleProtectedClick('/cart')} />
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    );
}

export default Navbar;
