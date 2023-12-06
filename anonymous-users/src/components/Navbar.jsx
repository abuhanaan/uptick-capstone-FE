import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  let { setSidebarOpen } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  let location = useLocation();
  const pathname = location.pathname;

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full ${
        pathname === "/" ? null : "bg-fair"
      }  transition duration-300 ease-out ${scrolled ? "bg-fair" : ""} z-50`}
    >
      <nav className="container flex justify-between items-center h-20">
        <div>
          <img
            className="w-40"
            src="/images/navbar-logo.png"
            alt="Navbar logo"
          />
        </div>

        <div className="flex lg:hidden">
          <IoMenu
            onClick={handleOpenSidebar}
            className="text-white text-3xl cursor-pointer"
          />
        </div>

        <ul className=" gap-10 hidden lg:flex">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={toggleDropdown}
              className="text-white flex gap-1 items-center"
              to="/"
            >
              <span> Programs </span>
              <span>{dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-white" to="/about">
              About us
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-white" to="/jobs">
              Jobs
            </Link>{" "}
          </li>
        </ul>

        <Link className="hidden lg:block" to="/programmes">
          <button className="bg-primary-blue text-sm text-white px-[16px] py-[10px] rounded-md  flex items-center justify-center">
            Explore Our Programmes
          </button>
        </Link>
      </nav>

      {dropdownOpen && (
        <div className="absolute w-[178px] flex flex-col  top-20 left-[40%] bg-fair">
          <Link
            onClick={toggleDropdown}
            className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
            to="/programs/software-engineering"
          >
            Software Engineering
          </Link>
          <Link
            onClick={toggleDropdown}
            className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
            to="/programs/ui-ux-design"
          >
            UI/UX Design
          </Link>
          <Link
            onClick={toggleDropdown}
            className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
            to="/programs/project-management"
          >
            Project Management
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
