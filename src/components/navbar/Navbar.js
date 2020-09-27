import React from 'react';
import './Navbar.css';
import Colors from '../../constans/Colors';

export default class Navbar extends React.Component {

    render() {
        return(
            <nav>
                <a href="/" className="navbar__title">Job Offers</a>
                <a href="/add-offer" style={styles.button}>
                    <span>Post a job</span>
                </a>
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