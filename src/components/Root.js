import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Index from './Index'
import ActivityDetail from './ActivityDetail'
import Registration from './register/Registration'
import Activities from './activities/Activities'

class Root extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Index} />
                    <Route path='/activity/:id' component={ActivityDetail} />
                    <Route path='/register' component={Registration} />
                    <Route path='/activities' component={Activities} />
                </Route>
            </Router>
        );
    }
}

export default Root;