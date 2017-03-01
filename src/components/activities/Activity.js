require('../../styles/activity.css');

import React, {Component} from 'react';

class ActivityComponent extends Component {
    render() {
        var activity = this.props.activity;
        return (
            <li className='activity'>
                <img src={'static/' + activity.image} />
                <p>
                    {activity.name}
                </p>
            </li>
        );
        
    }
}

export default ActivityComponent;