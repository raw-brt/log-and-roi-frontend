import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content" />
    </div>
  );
}

export default App;
