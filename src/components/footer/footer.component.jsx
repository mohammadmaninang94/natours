import React from 'react';

const Footer = () => (
    <footer className='footer'>
        <div className='footer__logo-box'>
            <picture className='footer__logo'>
                <source srcset='img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x' 
                    media='(max-width: 37.5em)'/>
                <img srcset='img/logo-green-1x.png 1x, img/logo-green-2x.png 2x' alt='Full Logo' />
            </picture>

        </div>
        <div className='row'>
            <div className='col-1-of-2'>
                <div className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__item'><a href='#company' className='footer__link'>Company</a></li>
                        <li className='footer__item'><a href='#company' className='footer__link'>Contact Us</a></li>
                        <li className='footer__item'><a href='#company' className='footer__link'>Careers</a></li>
                        <li className='footer__item'><a href='#company' className='footer__link'>Privacy Policy</a></li>
                        <li className='footer__item'><a href='#company' className='footer__link'>Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-1-of-2'>
                <p className='footer__copyright'>
                    Built by <a href='#copyright' className='footer__link'>Mohammad Maninang</a>. Copyright &copy; by Mohammad Maninang. You are 100% allowed to use this webpage for both personal and commercial use but not to claim it as your own design.
                    A credit to the original author, jonas Schmedtmann, is of course highly appreciated
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;