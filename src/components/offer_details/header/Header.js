import React from 'react';
import './Header.css';
import HeaderColorBar from './HeaderColorBar';
import { ImagesUrl } from '../../../constans/ApiUrl';

import Target from '../../../icons/target.png';
import Pin from '../../../icons/pin.png';
import Profits from '../../../icons/profits.png';

export default class Header extends React.Component {

    render() {
        const { title, salary, company } = this.props;
        console.log('header: ', title);
        console.log('company logo: ', company.logo);
        return(
            <>
                <div className="offer-details-header">
                    <div className="offer-details-header__icon-wrapper">
                        <img className="offer-details-header__icon" /*src={ImagesUrl+'logos/'+company.logo}*/ src={company.logo} alt="company icon"/>
                    </div>
                    <div className="offer-details-header__right-column">
                        <div className="offer-details-header__title">{title}</div>
                        <div className="offer-details-header__content">
                            <div className="offer-details-header__content-row"><img src={Target} />&nbsp;{company.name}</div>
                            <div className="offer-details-header__content-row"><img src={Pin} />&nbsp;{company.location}</div>
                            <div className="offer-details-header__content-row"><img src={Profits} />&nbsp;{salary.from+' PLN' + ' - ' + salary.to+' PLN' }</div>                            
                        </div>
                    </div>
                </div>
            </>
        );
    }

}