import React from 'react';

export default class InputWithBorderTitle extends React.Component {
    render() {
        const { title, placeholder, error } = this.props;
        return(
            <div style={styles.wrapper}>
                <div style={styles.inputField}>
                    <div style={styles.inputLabel}>{title}</div>
                    <input 
                        type="text" 
                        style={styles.input} 
                        placeholder={placeholder} 
                        onChange={e => this.props.handleChange(e.target.value)}
                        value={this.props.value ? this.props.value : ''}
                    />
                </div>
                {error &&
                    <div style={styles.error}>To pole nie może być puste.</div>
                }
            </div>
        );
    }
}
const styles = {
    wrapper: {
        margin: '20px 0px',
        width: '100%'
    },
    inputField: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    inputLabel: {
        position: 'absolute',
        fontSize: '12px',
        top: '-8px',
        left: '45px',
        background: 'white',
        padding: '0px 6px',
        color: 'gray',
    },
    input: {
        border: '1px solid #ccc',
        borderRadius: '50px',
        width: '100%',
        outline: 'none',
        fontSize: '17px',
        padding: '13px',
    },
    error: {
        color: 'red',
        fontSize: '14px',
    }
}