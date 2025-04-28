import React, { useContext, useEffect } from "react";
import Container from "./Container";
import { NavLink } from "react-router";
import { NavOpenContext } from "../context/navOpen";
const Header = () => {
  const { navOpen, setNavOpen } = useContext(NavOpenContext);

  const handleOpen = () => {
    if (window.innerWidth < 800) {
      setNavOpen((open) => !open);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavOpen]);

  return (
    <header className="bg-white text-black sticky top-0 z-10 shadow-xs">
      <Container extraClasses="flex justify-between items-center px-3">
        <div className="flex gap-2 items-center">
          <svg
            className="w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.4"
                d="M12.3691 8.87988H17.6191"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M12.3691 15.8799H17.6191"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <h1 className="text-xl bold xs:text-2xl">Task Management</h1>
        </div>
        <div className="relative">
          <button onClick={handleOpen} className="text-2xl xs:hidden">
            &#9776;
          </button>

          <nav
            className={` bg-white shadow text-xl rounded top-10 flex flex-col absolute gap-8 px-4 right-4 transition-all duration-300   ${
              navOpen ? "max-h-96 p-4" : "max-h-0 overflow-hidden "
            } xs:shadow-none xs:block xs:max-h-full xs:overflow-visible xs:static xs:space-x-4`}
          >
            <NavLink
              onClick={handleOpen}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-400"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              onClick={handleOpen}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-gray-400"
              }
              to="/register"
            >
              Register
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
