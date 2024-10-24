import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setAdmin, setClient } from "../reduxToolKit/service/slices"; // Import setAdmin and setClient

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, client } = useSelector((state) => state.app); // Adjust to use 'app' slice
  console.log("admin", admin);
  console.log("client", client);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = (role) => {
    // setMenuOpen(false);
    if (role === "admin") {
      dispatch(setAdmin(true)); // Dispatching setAdmin action
      dispatch(setClient(false)); // Ensure client is set to false
    } else if (role === "client") {
      dispatch(setAdmin(false)); // Ensure admin is set to false
      dispatch(setClient(true)); // Dispatching setClient action
    }
    navigate("/login"); // Redirecting to login page
  };

  const NavItems = [
    { title: "Home", link: "/" },
    {
      title: "Admin",
      link: "/adminlogin",
      onClick: () => handleMenuItemClick("admin"),
    },
    {
      title: "User",
      link: "/userlogin",
      onClick: () => handleMenuItemClick("client"),
    },
  ];

  return (
    <div className={`pl-7 pr-7 ${scrolled ? "bg-white" : "bg-[#0e3f5b]"}`}>
      <div className="relative flex justify-between px-6 mt-0 align-middle h-[4rem]">
        <a href="/">
          <img
            src="/dataspacelogo1.png"
            alt="Logo"
            className="absolute mx-auto h-[0.6rem] top-3 sm:h-5 md:h-7 lg:h-9 xl:h-11"
          />
        </a>
        <div className="flex items-center justify-end w-full align-middle">
          <button
            className="block mt-0 align-middle md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-10 align-middle"
              fill="none"
              color="#FFFFFF"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`hidden md:flex gap-8 font-light text-xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {NavItems.map((item, index) => (
              <li key={index} className="hover:underline active:text-blue-900">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active underline decoration-white" : ""
                  }
                  to={item.link}
                  onClick={item.onClick}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 z-50 w-32 bg-[#0D5077] shadow-md transition-transform duration-300 ease-in-out transform pt-12 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute text-xl top-4 right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            size={30}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 py-4 text-white">
          {NavItems.map((item, index) => (
            <li key={index} className="hover:underline">
              <NavLink to={item.link} onClick={item.onClick}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
