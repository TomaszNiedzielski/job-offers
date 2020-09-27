import React from 'react';
import Colors from '../../constans/Colors';

export default class PrimaryButton extends React.Component {

    render() {
        return(
            <button onClick={() => this.props.handleOnClick()} style={styles.button}>{this.props.title}</button>        
        );
    }
    
}

const styles = {
    button: {
        padding: '10px 30px',
        borderRadius: '20px',
        border: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        background: Colors.primaryGradient
    }
}