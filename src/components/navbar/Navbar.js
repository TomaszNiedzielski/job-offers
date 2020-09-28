import React from 'react';
import './Navbar.css';
import Colors from '../../constans/Colors';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return(
            <nav>
                <Link to={"/"} className="navbar__title">Job Offers</Link>
                <Link to={"/add-offer"} style={styles.button}>
                    <span>Post a job</span>
                </Link>
            </nav>
        );
    }

}

const styles = {
    button: {
        background: Colors.primaryGradient,
        borderRadius: '20px',
        padding: '10px 20px',
        color: 'white',
        fontWeight: 'bold'
    }
}