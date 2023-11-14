import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { IoMenu } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  let { setSidebarOpen } = useAppContext();
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 w-full transition duration-300 ease-out ${
        scrolled ? "bg-fair" : ""
      }`}
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
            <Link className="text-white" to="/programs">
              Programs
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
          <Button type="filled" text="Explore Our Programmes" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
