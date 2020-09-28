import React from 'react';
import './OffersList.css';
import { Link } from 'react-router-dom';
import { ApiUrl, ImagesUrl } from '../../constans/ApiUrl';
import { useSelector } from 'react-redux';

import Target from '../../icons/target.png';
import Pin from '../../icons/pin.png';
import Profits from '../../icons/profits.png';

const OffersList = props => {

    const offers = useSelector(state => state);
    return(
        <div className="offers-list">
            {offers.length > 0 ? offers.map(offer => {
                const { company, salary, description, title } = offer;
                return(
                    <Link key={offer.id} to={"/offers/?id="+offer.id} className="offer-item__link">
                        <div className="offer-item">
                            <img className="offer-item__company-logo" src={company.logo} alt="company logo"/>
                            <div className="offer-item__content">
                                <div className="offer-item__title">{title}</div>
                                <div className="offer-item__details">
                                    <div>
                                        <div className="offer-item__details__row"><img src={Target} />&nbsp;<span>{company.name}</span></div>
                                        <div className="offer-item__details__row"><img src={Pin} />&nbsp;<span>{company.location}</span></div>
                                    </div>
                                    <div className="offer-item__details__row"><img src={Profits} />&nbsp;<span>{salary.from+' PLN'}</span><span>{' - ' + salary.to+' PLN' }</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }) : 'No offers yet.'}
        </div>
    );
    
}

export default OffersList;