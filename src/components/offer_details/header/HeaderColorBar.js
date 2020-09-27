import React from 'react';
import Colors from '../../../constans/Colors';

export default class HeaderColorBar extends React.Component {

    render() {
        return(
            <div style={styles.container}></div>
        );
    }

}

const styles = {
    container: {
        background: Colors.primaryGradient,
        height: '200px',
        width: '100%',
        position: 'absolute',
        top: '58px',
        zIndex: -1,
        left: 0,
    }
}