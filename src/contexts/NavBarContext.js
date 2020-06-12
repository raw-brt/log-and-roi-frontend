import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

export const NavBarProvider = ({children}) => {
  const [isSidebarDropped, setIsSidebarDropped] = useState(false);

  return (
    <NavBarContext.Provider value={{isSidebarDropped, setIsSidebarDropped}}>
      {children}
    </NavBarContext.Provider>
  )
};