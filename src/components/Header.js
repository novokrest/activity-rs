import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

class HeaderComponent extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        var self = this;
        var lock = this.props.lock;
        lock.on('authenticated', authResult => {
            var token = authResult.accessToken;
            lock.getUserInfo(authResult.accessToken, (err, profile) => {
                if (err) {
                    alert(err);
                    return;
                }
                AuthActions.logInUser(profile, token);
                self.setState({authenticated: true});
            });
        });
        lock.on('authorization_error', err => {
            alert(err);
        });
    }

    componentWillUnmount() {
        var lock = this.props.lock;
        lock.removeAllListeners('authenticated');
        lock.removeAllListeners('authorization_error');
    }

    login() {
        this.props.lock.show();
    }

    logout() {
        AuthActions.logOutUser();
        this.setState({authenticated: false});
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'>Activities</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    { !this.state.authenticated ? (
                        <NavItem onClick={this.login}>Login</NavItem>
                      ) : (
                        <NavItem onClick={this.logout}>Logout</NavItem>
                      ) }
                </Nav>
            </Navbar>
        );
    }
}

export default HeaderComponent;