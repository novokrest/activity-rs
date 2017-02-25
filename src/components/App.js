require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import config from 'config';
import Header from './Header';
import Sidebar from './Sidebar';

class AppComponent extends Component {
    constructor() {
        super();
        this.lock = new Auth0Lock(config.auth.clientId, config.auth.domain);
    }

    render() {
        return (
            <div>
                <Header lock={this.lock} />
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Sidebar />
                        </Col>
                        <Col xs={12} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default AppComponent;