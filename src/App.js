import React from 'react';

import Offers from './pages/Offers';
import OfferDetails from './pages/OfferDetails';
import AddOffer from './pages/AddOffer';


import Navbar from './components/navbar/Navbar';

import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <>
        <Navbar/>
        <Router
            basename="/"
        >
            <Switch>
                <Route exact path="/" component={Offers} />
                <Route path="/offers" component={OfferDetails} />
                <Route path="/add-offer" component={AddOffer} />                
            </Switch>
        </Router>
        </>
    );
}

export default App;
