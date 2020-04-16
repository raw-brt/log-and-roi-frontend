import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import SelectedProjectProvider from './contexts/SelectedProjectContext';
import { SelectedLogProvider } from './contexts/SelectedLogContext';

ReactDOM.render((
  <AuthContextProvider>
    <SelectedProjectProvider>
      <SelectedLogProvider>
        <Router>
          <App />
        </Router>
      </SelectedLogProvider>
    </SelectedProjectProvider>
  </AuthContextProvider>
  ), document.getElementById('root'));

