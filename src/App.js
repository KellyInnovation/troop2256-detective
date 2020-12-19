import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import Home from './Home';
import Detective from './Detective';
import Christmas from './Christmas';
import Cookies from './Cookies';
import Final from './Final';
import Games from './Games';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Troop 2256 Detective Badge</h1>
        <br/>
        <Router>
          <div className="app">
            <div className="router-switch">
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                />
                <Route
                  path='/detective'
                  component={Detective}
                />
                <Route
                  path='/christmas'
                  component={Christmas}
                />
                <Route
                  path='/cookies'
                  component={Cookies}
                />
                <Route
                  path='/final'
                  component={Final}
                />
                <Route
                  path='/games'
                  component={Games}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
