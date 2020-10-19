import React from 'react';

const StoryBox = ({name, img, title, story}) => (
    <div className='story'>
        <figure className='story__shape'>
            <img src={img} alt='person on a tour' className='story__img' />
            <figcaption className='story__caption'>{name}</figcaption>
        </figure>
        <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
            <p>{story}</p>
        </div>
    </div>
);

export default StoryBox;