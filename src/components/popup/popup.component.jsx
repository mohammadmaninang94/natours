import React from 'react';

const Popup = () => (
    <div className='popup' id='popup'>
        <div className='popup__content'>
            <div className='popup__left'>
                <img 
                srcSet='img/nat-8-small.jpg 656w, img/nat-8.jpg 974w'
                sizes='(min-width: 112.5em) 25vw, 300px'
                src='img/nat-8.jpg' 
                alt='River tour' className='popup__img' />
                <img 
                srcSet='img/nat-9-small.jpg 611w, img/nat-9.jpg 1008w'
                sizes='(min-width: 112.5em) 25vw, 300px'
                src='img/nat-9.jpg' 
                alt='Mountain tour' className='popup__img' />
            </div>
            <div className='popup__right'>
                <a href='#section-tours' className='popup__close'>&times;</a>
                <h2 className='heading-secondary u-margin-bottom-small'>Start booking now</h2>
                <h3 className='heading-tertiary u-margin-bottom-small'>Important &ndash; Please read these terms before booking</h3>
                <p className='popup__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae. Ultricies tristique nulla aliquet enim tortor at auctor. Sit amet tellus cras adipiscing. Felis eget nunc lobortis mattis aliquam faucibus. Augue ut lectus arcu bibendum at varius vel pharetra. Duis at tellus at urna condimentum mattis pellentesque. Amet tellus cras adipiscing enim eu turpis. Laoreet sit amet cursus sit amet. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum.
                </p>
                <a href='#book' className='btn btn--green'>Book now</a>
            </div>
        </div>
    </div>
);

export default Popup;