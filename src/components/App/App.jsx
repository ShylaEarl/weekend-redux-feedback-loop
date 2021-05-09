import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//connecting to components for each page
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import FinalPage from '../FinalPage/FinalPage';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Feeling">
        <Feeling />
      </Route>
      <Route exact path="/Understanding">
        <Understanding />
      </Route>
      <Route exact path="/Supported">
        <Supported />
      </Route>
      <Route exact path="/Comments">
        <Comments />
      </Route>
      <Route exact path="/Review">
        <Review />
      </Route>
      <Route exact path="/FinalPage">
        <FinalPage />
      </Route>
      <Route exact path="/Admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;

