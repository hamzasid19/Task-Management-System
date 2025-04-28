import React, { useContext, useEffect } from "react";
import Container from "./Container";
import { NavLink } from "react-router";
import { NavOpenContext } from "../context/navOpen";
import user from "../assets/user.jpg";
import { AuthContext } from "../context/AuthContext";
const UserHeader = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setSideBarOpen, profileDropDown, setProfileDropDown } =
    useContext(NavOpenContext);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");

    setIsAuthenticated(false);
    setProfileDropDown((open) => !open);
  };
  const handleDropDown = () => {
    setProfileDropDown((open) => !open);
  };
  const handleSideBar = () => {
    setSideBarOpen((open) => !open);
  };
  useEffect(() => {
    const sideResize = () => {
      if (window.innerWidth >= 800) {
        setSideBarOpen(false);
      }
    };

    window.addEventListener("resize", sideResize);
    return () => window.removeEventListener("resize", sideResize);
  }, [setSideBarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setProfileDropDown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setProfileDropDown]);

  return (
    <header className="bg-white text-black sticky top-0 z-10 shadow-xs">
      <Container extraClasses="flex justify-between items-center px-3">
        <div className="flex gap-2 items-center">
          <svg
            className="w-10 "
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
        <div className="flex gap-4 items-center ">
          <svg
            className="w-5 cursor-pointer
            "
            viewBox="0 0 30 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>bell</title> <desc>Created with Sketch Beta.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                {" "}
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-413.000000, -880.000000)"
                  fill="#000000"
                >
                  {" "}
                  <path
                    d="M439.941,893.604 L435.958,900.343 L435.558,906.855 L416.584,896.156 L422.158,892.562 L426.142,885.822 C428.342,882.101 433.215,880.825 437.024,882.975 C440.835,885.123 442.141,889.882 439.941,893.604 L439.941,893.604 Z M423.581,905.718 C422.152,904.912 421.662,903.128 422.487,901.732 L427.662,904.65 C426.837,906.046 425.01,906.523 423.581,905.718 L423.581,905.718 Z M438.021,881.289 C433.258,878.604 427.167,880.197 424.417,884.85 L420.434,891.589 L413.001,896.383 L420.763,900.76 C419.388,903.086 420.203,906.06 422.585,907.402 C424.967,908.746 428.012,907.949 429.387,905.623 L437.148,910 L437.683,901.315 L441.666,894.576 C444.416,889.924 442.784,883.976 438.021,881.289 L438.021,881.289 Z"
                    id="bell"
                    sketch:type="MSShapeGroup"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <div className="relative">
            <button
              onClick={handleSideBar}
              className="text-2xl xs:hidden cursor-pointer"
            >
              &#9776;
            </button>
            <button
              onClick={handleDropDown}
              className="flex items-center cursor-pointer max-[800px]:hidden"
            >
              <img className="w-10 h-10 rounded-full" src={user} alt="" />
              &#9207;
            </button>
            <nav
              className={` bg-white shadow text-xl rounded top-10 flex flex-col absolute gap-8 px-4 right-4 transition-all duration-300   ${
                profileDropDown ? "max-h-96 p-4" : "max-h-0 overflow-hidden "
              } `}
            >
              <NavLink
                onClick={handleDropDown}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-gray-400"
                }
                to="/setting"
              >
                Profile
              </NavLink>
              <NavLink
                onClick={handleDropDown}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-gray-400"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                onClick={logoutHandler}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-gray-400 "
                }
                to="/"
              >
                Logout
              </NavLink>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default UserHeader;
