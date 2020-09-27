import React from 'react';
import './ApplyForJobForm.css';
import InputWithBorderTitle from '../../inputs/InputWithBorderTitle';
import PrimaryButton from '../../buttons/PrimaryButton';
import CvInput from './CvInput';

export default class ApplyForJobForm extends React.Component {

    constructor(props) {
        super(props);

        this.apply = this.apply.bind(this);

        this.state = {
            name: null,
            email: null,
            cv: null
        }
    }

    render() {
        const { name, email, cv } = this.state;
        return(
            <div className="apply-form">
                <div className="apply-form__content">
                    <h1 style={{ textAlign: 'center' }}>Apply for this job</h1>
                    <InputWithBorderTitle
                        value={name}
                        title="first & last name"
                        handleChange={text => this.setState({ name: text })}                        
                    />
                    <InputWithBorderTitle
                        value={email}
                        title="Email"
                        handleChange={text => this.setState({ email: text })}                        
                    />
                    <CvInput />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', marginBottom: '30px' }}>
                        <PrimaryButton
                            title="Apply"
                            handleOnClick={this.apply}   
                        />
                    </div>
                </div>
            </div>
        );
    }

    apply() {
        const { name, email } = this.state;
        console.log(name, email);
        this.setState({
            name: null,
            email: null
        });
    }

}