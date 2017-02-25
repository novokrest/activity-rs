import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

export default {
    logInUser: (profile, token) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGIN_USER,
            profile: profile,
            token: token
        });
    },

    logOutUser: () => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGOUT_USER
        });
    }
};