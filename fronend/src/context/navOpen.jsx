import { createContext, useState } from "react";

export const NavOpenContext = createContext({
  navOpen: false,
  setNavOpen: () => {},
  sideBarOpen: false,
  setSideBarOpen: () => {},
  profileDropDown: false,
  setProfileDropDown: () => {},
});

export const NavOpenProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  return (
    <NavOpenContext.Provider
      value={{
        navOpen,
        setNavOpen,
        sideBarOpen,
        setSideBarOpen,
        profileDropDown,
        setProfileDropDown,
      }}
    >
      {children}
    </NavOpenContext.Provider>
  );
};
