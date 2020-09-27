import React from 'react';
import ReactFileReader from 'react-file-reader';

export default class CvInput extends React.Component {

    state = {
        cv: null
    }

    render() {
        const { cv } = this.state;
        return(
            <ReactFileReader fileTypes={[".pdf"]} base64={true} handleFiles={file => this.setState({ cv: file.fileList[0].name})}>
                <div className="input-field">
                    <div className="input-label">CV</div>
                    <label className="file-input-label">
                        <div>{cv ? cv : <span style={{color: '#ccc'}}>only .pdf file</span>}</div>
                    </label>
                </div>
            </ReactFileReader>
        );
    }
}