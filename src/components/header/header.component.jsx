import React from 'react';

// import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <div className='header__logo-box'>
            <img src='/img/logo-white.png' alt='Natour Logo' className='header__logo' />
        </div>
        <div className='header__text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary--main'>Outdoors</span>
                <span className='heading-primary--sub'>is where life happens</span>
            </h1>
            <a href='#discover' className='btn btn--white'>Discover our tours</a>
        </div>
    </header>
);

export default Header;