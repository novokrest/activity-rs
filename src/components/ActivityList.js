import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ActivityListItem from './ActivityListItem';

import ActivityStore from '../stores/ActivityStore';
import ActivityActions from '../actions/ActivityActions';

function createActivityListItem(activity) {
    return (
        <ActivityListItem key={activity.id} activity={activity} />
    );
}

class ActivityListComponent extends Component {
    constructor() {
        super();

        this.state = {
            activities: []
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        ActivityStore.addChangeListener(this.onChange);
    }

    componentDidMount() {
        ActivityActions.receiveActivities();
    }

    componentWillUnmount() {
        ActivityStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            activities: ActivityStore.getActivities()
        });
    }

    render() {
        let activityListItems;
        if (this.state.activities) {
            activityListItems = this.state.activities.map(activity => createActivityListItem(activity))
        }
        return (
            <div>
                <ListGroup>
                    {activityListItems}
                </ListGroup>
            </div>
        );
    }
}

export default ActivityListComponent;
