import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import { UserDataContext } from "../context/UserData";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";
import EditProfile from "./EditProfile";
import { handleError, handleSuccess } from "../Toast/Util";
import { ToastContainer } from "react-toastify";
const Setting = () => {
  const id = localStorage.getItem("id");
  const { userInfo, setUserInfo, editUser, setEditUser } =
    useContext(UserDataContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const fetchUser = async (req, res) => {
    const rest = await axios.get(`http://localhost:8000/api/user/${id}`);
    setUserInfo(rest.data.user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {};
    for (const key in editUser) {
      if (editUser[key]) {
        updatedData[key] = editUser[key];
      }
    }
    if (
      editUser.email === "" &&
      editUser.username === "" &&
      editUser.password === ""
    ) {
      handleError("Please fill a Field to update");
      return;
    }
    try {
      const user = await axios.patch(
        `http://localhost:8000/api/user/${id}`,
        updatedData
      );

      handleSuccess("Profile Updated Successfully");

      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } catch (error) {
      handleError("Something went wrong");
    }
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");

    setIsAuthenticated(false);
  };
  useEffect(() => {
    fetchUser();
  }, [userInfo]);
  return (
    <Container extraClasses="xs:px-2 px-4 flex flex-col gap-3">
      <h1 className="text-2xl xs:text-3xl font-bold text-center">Setting </h1>
      <div className="flex flex-col gap-2">
        <p className="text-xl">
          <span className="font-bold text-2xl">Name: </span>
          {userInfo.username}
        </p>
        <p className="text-xl">
          <span className="font-bold text-2xl">Email:</span> {userInfo.email}
        </p>
      </div>
      <div className="flex gap-2 relative">
        <Button extraClasses="w-30" text="Logout" handleClick={logoutHandler} />
        <Button
          extraClasses="w-30"
          text="Edit Profile"
          handleClick={handleClick}
        />
        {isOpen && (
          <EditProfile
            handleSubmit={handleSubmit}
            setEditUser={setEditUser}
            editUser={editUser}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Setting;
