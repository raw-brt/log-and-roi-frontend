import React, { createContext, useState } from 'react';

export const SelectedProjectContext = createContext();

const SelectedProjectProvider = ({children}) => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const [selectedProjectCostPerHour, setSelectedProjectCostPerHour] = useState(0);
  const [selectedProjectCost, setSelectedProjectCost] = useState(0);
  const [selectedProjectRoi, setSelectedProjectRoi] = useState(0);
  const [selectedProjectProfit, setSelectedProjectProfit] = useState(0);
  const [areThereProjects, setAreThereProjects] = useState(false);

  return (
    <SelectedProjectContext.Provider value={{
      selectedProject,
      setSelectedProject,
      selectedProjectName,
      setSelectedProjectName,
      selectedProjectCostPerHour,
      setSelectedProjectCostPerHour,
      selectedProjectCost,
      setSelectedProjectCost,
      selectedProjectRoi, 
      setSelectedProjectRoi,
      selectedProjectProfit,
      setSelectedProjectProfit,
      areThereProjects,
      setAreThereProjects,
      }}>
      {children}
    </SelectedProjectContext.Provider>
  )
};

export default SelectedProjectProvider;

