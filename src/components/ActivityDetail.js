import React, {Component} from 'react';
import ActivityActions from '../actions/ActivityActions';
import ActivityStore from '../stores/ActivityStore';

class ActivityDetail extends Component {
    constructor() {
        super();
        
        this.state = {
            activity: {}
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        ActivityStore.addChangeListener(this.onChange);
    }

    componentDidMount() {
        ActivityActions.receiveActivity(this.props.params.id);
    }

    componentWillUnmount() {
        ActivityStore.removeChangeListener(this.onChange);
    }

    componentWillReceiveProps(nextProps) {
        ActivityActions.receiveActivity(nextProps.params.id);
    }

    onChange() {
        this.setState({
            activity: ActivityStore.getActivity()
        });
    }

    render() {
        let activity = this.state.activity;
        return (
            <div>
            {
                activity &&
                <div>
                    <h1>{activity.name}</h1>
                    <h3>{activity.description}</h3>
                </div>
            }
            </div>
        );
    }
}

export default ActivityDetail;