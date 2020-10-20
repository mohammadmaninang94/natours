import React from 'react';

import StoryBox from '../story-box/story-box.components';

import stories from './stories';

// mp4 and webm we need these 2 formats to make sure it works for all browsers
const SectionStories = () => (
    <section className='section-stories'>
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>              
                <source src='img/video.mp4' type='video/mp4' />  
                <source src='img/video.webm' type='video/webm' /> 
                Your browser is not supported!
            </video>
        </div>
        <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>
        {stories.map(({name, ...props }) => (
            <div key={name} className='row'>
                <StoryBox name={name} {...props} />
            </div>
        ))}
        <div className='u-center-text u-margin-top-huge'>
            <a href='#x' className='btn-text'>Read all stories</a>
        </div>
    </section>
);

export default SectionStories;