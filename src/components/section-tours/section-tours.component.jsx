import React from 'react';

import Card from '../card/card.component';

import cards from './cards';

const SectionTours = () => (
    <section className='section-tours'>
        <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>most popular tours</h2>
        </div>
        <div className='row'>
            {cards.map(({ cardNo, title, details, price }, index, array) => (
                <div key={cardNo} className={`col-1-of-${array.length}`}>
                    <Card cardNo={cardNo} title={title} details={details} price={price} />
                </div>
            ))}
        </div>
        <div className='u-center-text u-margin-top-huge'>
            <a href='#x' className='btn btn--green'>Discover all tours</a>
        </div>
    </section>
);

export default SectionTours;