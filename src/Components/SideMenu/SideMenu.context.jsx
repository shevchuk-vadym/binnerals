import React from 'react';

const SideMenuContext = React.createContext();

SideMenuContext.displayName = 'SideMenu';

const SideMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SideMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
};

const useSideMenu = () => React.useContext(SideMenuContext);

export { useSideMenu, SideMenuContextProvider };
