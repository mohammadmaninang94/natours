import React from 'react';

import Card from '../card/card.component';

const SectionTours = () => (
    <main>
        <section className='section-tours'>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className='heading-secondary'>most popular tours</h2>
            </div>
            <div className='row'>
                <div className='col-1-of-3'>
                    <Card />
                </div>
                <div className='col-1-of-3'>
                    <Card />
                </div>
                <div className='col-1-of-3'>
                    <Card />
                </div>
            </div>
        </section>
    </main>
);

export default SectionTours;