import React from 'react';
import ReactFileReader from 'react-file-reader';
export default class ImageInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleFiles = this.handleFiles.bind(this);

        this.state = {
            img: null
        }
    }

    render() {
        const { img } = this.state;
        return(
            <ReactFileReader base64={true} handleFiles={this.handleFiles}>
                <div style={styles.container}>
                    {img 
                        ? <img src={this.state.img} alt="image" style={styles.img}/>
                        : <span>Upload logo</span>
                    }
                </div>
            </ReactFileReader>
        );
    }

    handleFiles = (files) => {
        console.log(files);
        this.setState({ img: files.base64 });
        //this.props.handleChange(files.fileList[0]);
        this.props.handleChange(files.base64);
        console.log(files);
    }

}

const styles = {
    container: {
        width: '200px',
        height: '200px',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ccc',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
}