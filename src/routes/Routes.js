import React from 'react';
import HomePage from '../Pages/HomePage';
import test1 from '../components/tests/test1';
import test2 from '../components/tests/test2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <div>

            <Router>

                <Switch>
                    <Route path="/" exact component={HomePage} />

                    {/* <Route path="/3" component={HomePage} /> */}
                </Switch >
            </Router>
        </div>
    )
}

export default Routes;