import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class HeaderComponent extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        alert('Login');
    }

    logout() {
        alert('Logout');
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
                    <NavItem onClick={this.login}>Login</NavItem>
                    <NavItem onClick={this.logout}>Logout</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default HeaderComponent;