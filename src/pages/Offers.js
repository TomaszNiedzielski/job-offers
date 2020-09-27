import React from 'react';
import OffersList from '../components/offers/OffersList';

export default class Offers extends React.Component {

    render() {
        return(
            <div className="container">
                <OffersList />
            </div>
        );
    }

}