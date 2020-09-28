import React from 'react';
import InputWithBorderTitle from '../components/inputs/InputWithBorderTitle';
import ImageInput from '../components/inputs/ImageInput';
import PrimaryButton from '../components/buttons/PrimaryButton';

import { ApiUrl } from '../constans/ApiUrl';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { connect } from 'react-redux';
import { addOffer } from '../redux/actions/offers';

class AddOffer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.isDataCorrect = this.isDataCorrect.bind(this);

        this.state = {
            companyName: null,
            companyWebsite: null,
            title: null,
            salaryFrom: null,
            salaryTo: null,
            location: null,
            logo: null,
            description: null,

            companyNameError: false,
            companyWebsiteError: false,
            titleError: false,
            salaryFromError: false,
            salaryToError: false,
            locationError: false,
            logoError: false,
            descriptionError: false,
        }
    }

    render() {
        const { companyName,
            companyWebsite,
            title,
            salaryFrom,
            salaryTo,
            location,
            logo,
            description,

            companyNameError,
            companyWebsiteError,
            titleError,
            salaryFromError,
            salaryToError,
            locationError,
            logoError,
            descriptionError,
        } = this.state;
        return(
            <div className="container">
                <div style={{ background: 'white', display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', border: '1px solid #ccc', marginBottom: '200px', marginTop: '50px' }}>
                    <ImageInput
                        handleChange={img => this.setState({ logo: img })}                        
                    />
                    {logoError &&
                        <div style={{color: 'red', fontSize: '14px'}}>To pole nie może być puste.</div>
                    }
                    <InputWithBorderTitle
                        title="Company name *"
                        placeholder="np. Medical Center"
                        handleChange={text => this.setState({ companyName: text })}
                        value={companyName}
                        error={companyNameError}
                    />
                    <InputWithBorderTitle
                        title="Company website *"
                        placeholder="np. www.medicalcenter.com"
                        handleChange={text => this.setState({ companyWebsite: text })}     
                        value={companyWebsite} 
                        error={companyWebsiteError}                                                                  
                    />
                    <InputWithBorderTitle
                        title="Title *"
                        placeholder="np. Internist urologist"
                        handleChange={text => this.setState({ title: text })} 
                        value={title}
                        error={titleError}
                    />
                    <div style={styles.inputsWrapper}>
                        <div style={styles.salaryInput}>
                        <InputWithBorderTitle
                            title="Salary from (PLN) *"
                            placeholder="np. 10000"
                            handleChange={text => this.setState({ salaryFrom: text })}     
                            value={salaryFrom}
                            error={salaryFromError}
                        />
                        </div>
                        <div style={styles.salaryInput}>
                        <InputWithBorderTitle
                            title="Salary to (PLN) *"
                            placeholder="np. 12000"
                            handleChange={text => this.setState({ salaryTo: text })} 
                            value={salaryTo}
                            error={salaryToError}                            
                        />
                        </div>
                    </div>
                    <InputWithBorderTitle
                        title="Location *"
                        placeholder="np. Warsaw, Poland"
                        handleChange={text => this.setState({ location: text })}
                        value={location}
                        error={locationError}
                    />

                    <h3>Description *</h3>
                    <ReactQuill theme="snow" value={this.state.description} onChange={value => this.setState({ description: value })} style={styles.textEditor} />
                    {descriptionError &&
                        <div style={{color: 'red', fontSize: '14px'}}>To pole nie może być puste.</div>
                    }

                    <div style={{ marginTop: '20px' }}>
                        <PrimaryButton title="Add Offer" handleOnClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit() {
        const { companyName, companyWebsite, title, salaryFrom, salaryTo, location, logo, description } = this.state;

        if(this.isDataCorrect() === false) {
            return;
        }

        const offer = {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            title: title,
            description: description,
            company: {
                name: companyName,
                website: companyWebsite,
                location: location,
                logo: logo
            },
            salary: {
                from: salaryFrom,
                to: salaryTo
            }
        }

        this.props.addOffer(offer);
        
        window.location.href = '/job-offers';
    }

    isDataCorrect() {
        const { companyName, companyWebsite, title, salaryFrom, salaryTo, location, logo, description } = this.state;
        let isError;
        if(!companyName) {
            this.setState({ companyNameError: true });
            isError = true;
        } else {
            this.setState({ companyNameError: false });
        }

        if(!companyWebsite) {
            this.setState({ companyWebsiteError: true });
            isError = true;
        } else {
            this.setState({ companyWebsiteError: false });            
        }

        if(!title) {
            this.setState({ titleError: true });
            isError = true;
        } else {
            this.setState({ titleError: false });
        }

        if(!salaryFrom) {
            this.setState({ salaryFromError: true });
            isError = true;
        } else {
            this.setState({ salaryFromError: false });
        }

        if(!salaryTo) {
            this.setState({ salaryToError: true });
            isError = true;
        } else {
            this.setState({ salaryToError: false });
        }

        if(!location) {
            this.setState({ locationError: true });   
            isError = true;         
        } else {
            this.setState({ locationError: false });
        }

        if(!logo) {
            this.setState({ logoError: true });     
            isError = true;       
        } else {
            this.setState({ logoError: false });
        }

        if(!description) {
            this.setState({ descriptionError: true });   
            isError = true;         
        } else {
            this.setState({ descriptionError: false });
        }

        if(isError === true) {
            return false;
        } else {
            return true;
        }
    }

}

const styles = {
    inputsWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    textEditor: {
        width: '100%'
    },
    salaryInput: {
        width: '47%',
        minWidth: '180px',
        margin: '0px auto'
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {
        addOffer
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(AddOffer);