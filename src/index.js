import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthContextProvider} from './contexts/AuthContext'

ReactDOM.render((
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>
  ), document.getElementById('root'));

