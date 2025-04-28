import React, { createContext, useState } from "react";

const token = localStorage.getItem("token");
export const AuthContext = createContext({
  isAuthenticated: !!token,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
