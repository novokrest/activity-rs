import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Index from './Index'
import ActivityDetail from './ActivityDetail'

class Root extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Index} />
                    <Route path='/activity/:id' component={ActivityDetail} />
                </Route>
            </Router>
        );
    }
}

export default Root;