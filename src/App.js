import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ProjectContents from './components/project.content/ProjectContents';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ProjectContents />
    </div>
  );
}

export default App;
