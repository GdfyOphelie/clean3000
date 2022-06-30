import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import Recap from './components/Recap';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/recap' component={Recap} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default Root