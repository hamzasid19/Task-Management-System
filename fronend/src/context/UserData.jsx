import { createContext, useState } from "react";

export const UserDataContext = createContext({
  regData: "",
  setRegData: () => {},
  loginData: "",
  setLoginData: () => {},
  userInfo: "",
  setUserInfo: () => {},
  editUser: "",
  setEditUser: () => {},
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
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const [editUser, setEditUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <UserDataContext.Provider
      value={{
        regData,
        setRegData,
        loginData,
        setLoginData,
        userInfo,
        setUserInfo,
        editUser,
        setEditUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
