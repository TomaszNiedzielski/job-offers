import React, { useEffect, useState } from 'react';
import Header from '../components/offer_details/header/Header';
import ApplyForJobForm from '../components/offer_details/apply/ApplyForJobForm';
//import { ApiUrl } from '../constans/ApiUrl';
import { useSelector } from 'react-redux';

const OfferDetails = props => {

    const [offerId, setOfferId] = useState();

    const offer = useSelector(state => state.find(offer => offer.id === offerId));

    useEffect(() => {
        let url = window.location.href;
        url = url.split("=");
        //const offerId = parseInt(url[url.length - 1]);
        const offerId = url[url.length - 1];
        setOfferId(offerId);
    }, []);
    
    if(offer) {
        const { title, salary, company, description } = offer;
        return (
            <div className="container">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                    <Header
                        title={title}
                        salary={salary}
                        company={company}
                    />
                    <article style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </article>
                    <ApplyForJobForm/>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default OfferDetails;