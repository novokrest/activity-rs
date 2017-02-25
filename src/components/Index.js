import React, {Component} from 'react';
import AuthStore from '../stores/AuthStore';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        }
    }

    render() {
        return (
            <div>
                {!this.state.authenticated ? (
                    <h2>Log in to view activity details</h2>
                ) : (
                    <h2>Click on activity to view details</h2>
                )}
            </div>
        );
    }
}

export default Index;