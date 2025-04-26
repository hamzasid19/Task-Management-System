import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8000/auth/check", {
          withCredentials: true, // required for cookies
        });
        setIsAuthenticated(res.data.success);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
