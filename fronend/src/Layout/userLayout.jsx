import React from "react";
import UserHeader from "../components/userHeader";
import { Outlet } from "react-router";
import SideBar from "../components/sideBar";

const Layout = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
      <SideBar />
    </>
  );
};

export default Layout;
