import React, { useContext, useState } from 'react';
import theme from '../../styles/theme';

const ToggleSidebarContext = React.createContext();

export const ToggleSidebarContextProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpenOpen] = useState(true);

  const handleToggleSidebar = () => {
    const { open, closed } = theme.sidebarWidth;
    const sidebarWidth = !sidebarIsOpen ? open : closed;
    document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
    setSidebarIsOpenOpen((value) => !value);
  };

  return (
    <ToggleSidebarContext.Provider value={{ handleToggleSidebar, sidebarIsOpen }}>
      {children}
    </ToggleSidebarContext.Provider>
  );
};

export const useToggleSidebarContext = () => {
  const toggleSidebarContext = useContext(ToggleSidebarContext);
  return toggleSidebarContext;
};
