import { createContext, useState } from "react";

export const UserDataContext = createContext({
  regData: "",
  setRegData: () => {},
  loginData: "",
  setLoginData: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  return (
    <UserDataContext.Provider
      value={{ regData, setRegData, loginData, setLoginData }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
