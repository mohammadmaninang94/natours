import React from 'react';

const SectionBook = () => (
    <section className='section-book'>
        <div className='row'>
            <div className='book'>
                <div className='book__form' >
                    <form action='#' className='form'>
                    <div className='u-margin-bottom-medium'>
                        <h2 className='heading-secondary'>Start booking now</h2>
                    </div>
                        <div className='form__group'>
                            <input id='fullname' type='text' className='form__input' placeholder='Full Name' required />
                            <label htmlFor='fullname' className='form__label'>Full Name</label>
                        </div>
                        <div className='form__group'>
                            <input id='email' type='email' className='form__input' placeholder='Email' required />
                            <label htmlFor='email' className='form__label'>Email</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default SectionBook;