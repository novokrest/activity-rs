import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';
const TOKEN_ID_ITEM = 'token_id';
const PROFILE_ITEM = 'profile';

function setUser(profile, token) {
    if (!localStorage.getItem(TOKEN_ID_ITEM)) {
        localStorage.setItem(TOKEN_ID_ITEM, token);
        localStorage.setItem(PROFILE_ITEM, profile);
    }
}

function removeUser() {
    localStorage.removeItem(TOKEN_ID_ITEM);
    localStorage.removeItem(PROFILE_ITEM);
}

class AuthStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(callback);
    }

    isAuthenticated() {
        return !!localStorage.getItem(TOKEN_ID_ITEM);
    }

    getUser() {
        return localStorage.getItem(PROFILE_ITEM);
    }

    getJwt() {
        return localStorage.getItem(TOKEN_ID_ITEM);
    }
}

const AuthStore = new AuthStoreClass();

AuthStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType) {
        case AuthConstants.LOGIN_USER:
            setUser(action.profile, action.token);
            break;

        case AuthConstants.LOGOUT_USER:
            removeUser();
            break;

        default:
            return;
    }

    AuthStore.emitChange();
});

export default AuthStore;