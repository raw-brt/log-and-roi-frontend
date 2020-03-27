import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import SelectedProjectProvider from './contexts/SelectedProjectContext';

ReactDOM.render((
  <AuthContextProvider>
    <SelectedProjectProvider>
      <Router>
        <App />
      </Router>
    </SelectedProjectProvider>
  </AuthContextProvider>
  ), document.getElementById('root'));

