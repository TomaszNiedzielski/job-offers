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
    console.log('offer to print', offer);
    console.log('offer id', offerId);
    
    if(offer) {
        console.log('offer to print in render', offer);
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

/*import React from 'react';
import Header from '../components/offer_details/header/Header';
import ApplyForJobForm from '../components/offer_details/apply/ApplyForJobForm';
import { ApiUrl } from '../constans/ApiUrl';

export default class OfferDetails extends React.Component {

    constructor(props) {
        super(props);

        this.loadOfferDetails = this.loadOfferDetails.bind(this);

        this.state = {
            offer: {}
        }
    }

    render() {
        const { title, salary, company, description } = this.state.offer;
        if(!title) return null;
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
    }

    componentDidMount() {
        let url = window.location.href;
        url = url.split("/");
        const offerId = url[url.length - 1];
        this.loadOfferDetails(offerId);
    }

    loadOfferDetails(offerId) {
        fetch(ApiUrl+'offer/show', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                offer_id: offerId
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('res');
            console.log(responseJson[0]);
            this.setState({ offer: responseJson[0] });
        })
        .catch((error) => {});
    }

}*/