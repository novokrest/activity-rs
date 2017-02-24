import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

class ActivityListItem extends Component {
    render() {
        const {activity} = this.props;

        return (
            <ListGroupItem>
                <Link to={`/activity/${activity.id}`}>
                    <h4>{activity.name}</h4>
                </Link>
            </ListGroupItem>
        );
    }
}

export default ActivityListItem;