import ActivityApi from '../utils/ActivityApi';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActivityConstants from '../constants/ActivityConstants';

export default {
    receiveActivity: (id) => {
        ActivityApi.getActivity(id)
                   .then(activity => {
                       AppDispatcher.dispatch({
                           actionType: ActivityConstants.RECEIVE_ACTIVITY,
                           activity: activity
                       });
                   })
                   .catch(message => {
                       AppDispatcher.dispatch({
                           actionType: ActivityConstants.RECEIVE_ACTIVITY_ERROR,
                           message: message
                       });
                   });
    },

    receiveActivities: () => {
        ActivityApi.getActivities()
                   .then(activities => {
                       AppDispatcher.dispatch({
                           actionType: ActivityConstants.RECEIVE_ACTIVITIES,
                           activities: activities
                       });
                   })
                   .catch(message => {
                       AppDispatcher.dispatch({
                           actionType: ActivityConstants.RECEIVE_ACTIVITIES_ERROR,
                           message: message
                       });
                   });
    }
};