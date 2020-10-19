import React from 'react';

import StoryBox from '../story-box/story-box.components';

import stories from './stories';

const SectionStories = () => (
    <section className='section-tours'>
        <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>
        {stories.map(({ ...props }) => (
            <div className='row'>
                <StoryBox {...props} />
            </div>
        ))}
        <div className='u-center-text u-margin-top-huge'>
            <a href='#x' className='btn-text'>Read all stories</a>
        </div>
    </section>
);

export default SectionStories;