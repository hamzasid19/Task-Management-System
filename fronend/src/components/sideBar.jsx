import React from "react";
import { NavLink } from "react-router";
import { NavOpenContext } from "../context/navOpen";
const SideBar = () => {
  const { sideBarOpen } = React.useContext(NavOpenContext);
  return (
    <div
      className={`absolute top-17 bottom-0 left-0 shadow text-2xl bg-white z-9 flex flex-col gap-5 pt-20 overflow-hidden transition-all duration-300
      ${sideBarOpen ? "w-[15rem]" : "w-0"}
    `}
    >
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `w-[90%] p-2 text-black rounded-tr-4xl rounded-br-4xl ${
            isActive
              ? "bg-[linear-gradient(100deg,_#a516a6,_#6d0eb2_44%,_#410cb2)] text-white"
              : ""
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) =>
          `w-[90%] p-2 text-black rounded-tr-4xl rounded-br-4xl ${
            isActive
              ? "bg-[linear-gradient(100deg,_#a516a6,_#6d0eb2_44%,_#410cb2)] text-white"
              : ""
          }`
        }
      >
        Setting
      </NavLink>
    </div>
  );
};

export default SideBar;
