import React from 'react';
import './App.css';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Home from './components/user/Home';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
