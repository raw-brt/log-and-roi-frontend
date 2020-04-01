import React, { createContext, useState } from 'react';

export const SelectedProjectContext = createContext();

const SelectedProjectProvider = ({children}) => {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
      {children}
    </SelectedProjectContext.Provider>
  )
};

export default SelectedProjectProvider;

