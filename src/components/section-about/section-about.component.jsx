import React from 'react';

const SectionAbout = () => (
    <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Exciting tours for adventorous people</h2>
        </div>
        <div className='row'>
            <div className='col-1-of-2'>
                <h3 className='heading-tertiary u-margin-bottom-small'>You're going to fall in love with nature</h3>
                <p className='pharagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non. At tellus at urna condimentum mattis pellentesque id.</p>
                <h3 className='heading-tertiary u-margin-bottom-small'>Live adventure like you never have been before</h3>
                <p className='pharagraph'>id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultriies integer quis auctor elit sed vulputate mi sit amet mauris.</p>
                <a href='#dwfd' className='btn-text'>Learn more &rarr;</a>
            </div>
            <div className='col-1-of-2'>
                <div className='composition'>
                    <img srcSet='img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w'
                        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                        alt='Natours 1'
                        className='composition__photo composition__photo--p1'
                        src='img/nat-1-large.jpg' />
                    <img srcSet='img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w'
                        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                        alt='Natours 2'
                        className='composition__photo composition__photo--p2'
                        src='img/nat-2-large.jpg' />
                    <img srcSet='img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w'
                        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                        alt='Natours 3'
                        className='composition__photo composition__photo--p3'
                        src='img/nat31-large.jpg' />
                </div>
            </div>
        </div>
    </section>
);

export default SectionAbout;