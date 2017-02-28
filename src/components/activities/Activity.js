import React, {Component} from 'react';

class ActivityComponent extends Component {
    render() {
        return (
            <div>
                {this.props.activity.name}
            </div>
        );
        
    }
}

export default ActivityComponent;