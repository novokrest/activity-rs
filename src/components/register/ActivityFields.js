import React, { Component } from 'react';

class ActivityFieldsComponent extends Component {
    constructor() {
        super();

        this.fieldValues = {};
        this.saveAndContinue = this.saveAndContinue.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={this.setValue.bind(this, 'name')} 
                                       defaultValue={this.props.fieldValues.name} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={this.setValue.bind(this, 'description')}
                                       defaultValue={this.props.fieldValues.description} />
                </div>
                <div>
                    <button onClick={this.saveAndContinue}>Save &amp; Continue</button>
                </div>
            </div>
        );
    }

    setValue(field, event) {
        this.fieldValues[field] = event.target.value;
    }

    saveAndContinue(e) {
        e.preventDefault();

        console.log(this.fieldValues);
        this.props.saveValues(this.fieldValues);
        this.props.nextStep();
    }
}

export default ActivityFieldsComponent;