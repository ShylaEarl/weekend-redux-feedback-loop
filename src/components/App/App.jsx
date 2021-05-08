import React from 'react';
//import axios from 'axios';
import './App.css';
//import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

//TODO add component imports here for each page
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import FinalPage from '../FinalPage/FinalPage';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      {/* TODO add route path here can use <Route exact path="/" component={} />  */}
      <Route>
        <Feeling exact path="/" />
      </Route>
      <Route>
        <Understanding exact path="/Understanding"/>
      </Route>
      <Route>
        <Supported exact path="/Supported"/>
      </Route>
      <Route>
        <Comments exact path="/Comments"/>
      </Route>
      <Route>
        <Review exact path="/Review"/>
      </Route>
      <Route>
        <FinalPage exact path="/FinalPage"/>
      </Route>
    </Router>
  );
}

export default App;
