import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Header from './Components/Header/header'
import Whack from './Components/Game/whack'
import Mapping from './Components/Mapping/mapping'
import FourOhFour from './Components/FourOhFour/fourOhFour'


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const myRoutes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/game' component={Whack} />
        <Route path='/mapping' component={Mapping} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  myRoutes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
