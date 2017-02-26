import React, { Component } from 'react';

import ActivityFields from './ActivityFields';
import Confirmation from './Confirmation';
import Success from './Success';

var fieldValues = {
    name: '',
    description: ''
}

class RegistrationComponent extends Component {
    constructor() {
        super();

        this.state = {
            step: 1
        };

        this.saveValues = this.saveValues.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.submitConfirmation = this.submitConfirmation.bind(this);
    }

    render() {
        switch (this.state.step) {
            case 1:
                return (<ActivityFields fieldValues={fieldValues}
                                        saveValues={this.saveValues}
                                        nextStep={this.nextStep} />);
            case 2:
                return (<Confirmation fieldValues={fieldValues}
                                      previousStep={this.previousStep}
                                      submitConfirmation={this.submitConfirmation} />);
            case 3:
                return (<Success />);
        }
    }

    saveValues(fields) {
        fieldValues = Object.assign({}, fieldValues, fields);
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    }

    previousStep() {
        this.setState({
            step: this.state.step - 1
        });
    }

    submitConfirmation() {
        this.nextStep();
    }
}

export default RegistrationComponent;