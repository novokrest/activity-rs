import React, {Component} from 'react';
import Activity from './Activity';
import ActivityStore from '../../stores/ActivityStore';
import ActivityActions from '../../actions/ActivityActions';

class ActivitiesComponent extends Component {
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

    render() {
        var activityComponents = this.state.activities.map(activity => (<Activity key={activity.id} activity={activity} />));
        return (
            <div className='activities'>
                {activityComponents}
            </div>
        );
    }

    onChange() {
        this.setState({
            activities: ActivityStore.getActivities()
        });
    }
}

export default ActivitiesComponent;