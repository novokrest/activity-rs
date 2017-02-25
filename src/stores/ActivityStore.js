import AppDispatcher from '../dispatcher/AppDispatcher';
import ActivityConstants from '../constants/ActivityConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _activities = [];
let _activity = {};

function setActivity(activity) {
    _activity = activity;
}

function setActivities(activities) {
    _activities = activities;
}

class ActivityStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    getActivities() {
        return _activities;
    }

    getActivity() {
        return _activity;
    }
}

const ActivityStore = new ActivityStoreClass();

ActivityStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType) {
        case ActivityConstants.RECEIVE_ACTIVITY:
            setActivity(action.activity);
            break;
        case ActivityConstants.RECEIVE_ACTIVITY_ERROR:
            alert(action.message);
            break;
        case ActivityConstants.RECEIVE_ACTIVITIES:
            setActivities(action.activities);
            break;
        case ActivityConstants.RECEIVE_ACTIVITY:
            alert(action.message);
            break;
        default:
            return;
    }

    ActivityStore.emitChange();
});

export default ActivityStore;