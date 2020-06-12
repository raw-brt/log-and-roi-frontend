import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import SelectedProjectProvider from './contexts/SelectedProjectContext';
import { SelectedLogProvider } from './contexts/SelectedLogContext';
import { NavBarProvider } from './contexts/NavBarContext';

ReactDOM.render((
  <AuthContextProvider>
    <SelectedProjectProvider>
      <SelectedLogProvider>
        <NavBarProvider>
          <Router>
            <App />
          </Router>
        </NavBarProvider>
      </SelectedLogProvider>
    </SelectedProjectProvider>
  </AuthContextProvider>
  ), document.getElementById('root'));

