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
    console.log(offers);
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
                                        <div className="offer-item__details__row"><img src={Target} />&nbsp;{company.name}</div>
                                        <div className="offer-item__details__row"><img src={Pin} />&nbsp;{company.location}</div>
                                    </div>
                                    <div className="offer-item__details__row"><img src={Profits} />&nbsp;{salary.from+' PLN' + ' - ' + salary.to+' PLN' }</div>
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

/*import React from 'react';
import './OffersList.css';
import { Link } from 'react-router-dom';
import { ApiUrl, ImagesUrl } from '../../constans/ApiUrl';

export default class OffersList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            offers: []
        }
    }

    render() {
        const { offers } = this.state;
        console.log(offers);
        return(
            <div className="offers-list">
                {offers.length > 0 ? offers.map(offer => {
                    const { company, salary, description, title } = offer;
                    return(
                        <Link key={offer.id} to={"/offers/"+offer.id} className="offer-item__link">
                            <div className="offer-item">
                                <img className="offer-item__company-logo" src={ImagesUrl+'logos/'+company.logo} alt="company logo"/>
                                <div className="offer-item__content">
                                    <div className="offer-item__title">{title}</div>
                                    <div className="offer-item__details">
                                        <div>
                                            <div>{company.name}</div>
                                            <div>{company.location}</div>
                                        </div>
                                        <div>{salary.from+' PLN' + ' - ' + salary.to+' PLN' }</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }) : 'No offers yet.'}
            </div>
        );
    }

    componentDidMount() {
        this.loadOffers();
    }

    loadOffers() {
        // in real app it's going to be loaded from api

        //fetch(ApiUrl+'offer/load-all', {
        //    method: 'POST',
        //    headers: {
        //        Accept: 'application/json',
        //        'Content-Type': 'application/json',
        //    },
        //    body: JSON.stringify({
        //        
        //    }),
        //})
        //.then((response) => response.json())
        //.then((responseJson) => {
        //    console.log(responseJson);
        //    this.setState({ offers: responseJson });
        //})
        //.catch((error) => {});

        // load from state manager

    }
}*/
