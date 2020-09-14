import React from 'react';

import './header.styles.scss';

const Header = () => (
    <header>
        <div className='logo-box'>
            <img src='/img/logo-white.png' alt='Natour Logo' className='logo' />
        </div>
        <div className='header-box'>
            <h1 className='header-primary'>
                <span className='heading-primary-main'>Outdoors</span>
                <span className='heading-primary-sub'>is where life happens</span>
            </h1>
            <a href='#discover' className='btn btn-white'>Discover our tours</a>
        </div>
    </header>
);

export default Header;