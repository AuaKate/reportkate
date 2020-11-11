import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import Login from './components/Login';
import MainNavbar from './components/MainNavbar';
import Contact from './components/Contact';
import Help from './components/Help';
import Cert from './components/Cert';
import Report from './components/Report';
import Tree from './components/Tree';

export default function App() {
    const [isSignedIn, setSignedIn] = React.useState(false);
    if (!isSignedIn) {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/">
                            <Login setSignedIn={setSignedIn}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    } else {
        return (
            <Router>
                <div>
                    <MainNavbar/>
                    <Switch>
                        <Route exact path="/tree">
                            <Tree />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/cert">
                            <Cert />
                        </Route>
                        <Route exact path="/help">
                            <Help />
                        </Route>
                        <Route path="/">
                            <Report />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}