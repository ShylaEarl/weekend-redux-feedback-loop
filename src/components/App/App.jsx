import React from 'react';
//import axios from 'axios';
import './App.css';
//import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//TODO add component imports here for each page

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route>
        {/* TODO add route path and component here can use <Route exact path="/" component={} />  */}
      </Route>
    </Router>
  );
}

export default App;
