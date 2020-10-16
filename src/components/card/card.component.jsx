import React from 'react';

const Card = ({ cardNo, title, details, price }) => (
    <div className='card'>
        <div className='card__side card__side--front'>
            <div className={`card__picture card__picture--${cardNo}`}>
                &nbsp;
            </div>
            <h4 className='card__heading'>
                <span className={`card__heading-span card__heading-span--${cardNo}`}>{title}</span>

            </h4>
            <div className='card__details'>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={`card__side card__side--back card__side--back--${cardNo}`}>
            <div className='card__cta'>
                <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>${price}</p>
                </div>
                <a href='#a' className='btn btn--white'>Book now!</a>
            </div>
        </div>
    </div>
);

export default Card;