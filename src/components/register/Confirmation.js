import React, {Component} from 'react';

class ConfirmationComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><b>Name:</b> {this.props.fieldValues.name}</li>
                    <li><b>Description:</b> {this.props.fieldValues.description}</li>
                </ul>
                <button onClick={this.props.previousStep} >Back</button>
                <button onClick={this.props.submitConfirmation}>Submit</button>
            </div>
        );
    }
}

export default ConfirmationComponent;