import React, { createContext, useState } from 'react';

export const SelectedLogContext = createContext();

export const SelectedLogProvider = ({children}) => {
  const [selectedLog, setSelectedLog] = useState(null);

  return(
    <SelectedLogContext.Provider value={{selectedLog, setSelectedLog}}>
      {children}
    </SelectedLogContext.Provider>
  )
};

