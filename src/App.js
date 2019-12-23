import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Main, ItemPage, Basket,Setting } from './component'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/' component = { Main }/>
        <Route path = '/item/:num' component = { ItemPage }/>
        <Route path = '/basket' component = { Basket} />
        <Route exact path = '/Setting' component = {Setting}/>
      </Router>
    </div>
  );
}

export default App;
