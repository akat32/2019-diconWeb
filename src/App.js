import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path = '/'/>
        
      </Router>
    </div>
  );
}

export default App;
