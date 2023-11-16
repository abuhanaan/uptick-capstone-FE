import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAppContext } from "../context/AppContext";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export const Sidebar = () => {
  let { sidebarOpen, setSidebarOpen } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-plain z-50 transition duration-700 ease-out ${
        sidebarOpen ? "-translate-x-0" : "-translate-x-full opacity-0"
      } `}
    >
      <div className="absolute w-[80%] h-full bg-fair p-6">
        <div className=" flex justify-end">
          <IoClose
            onClick={handleCloseSidebar}
            className="text-3xl text-white  cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-5 mb-8">
          <li>
            <Link onClick={handleCloseSidebar} className="text-neutral" to="/">
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              onClick={toggleDropdown}
              className="text-neutral flex gap-2 items-center"
              to="/"
            >
              <span>Programs</span>

              <span>{dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </Link>

            {dropdownOpen && (
              <div className="w-[178px] mt-4 flex flex-col  top-20 left-[40%] bg-fair">
                <Link
                  onClick={handleCloseSidebar}
                  className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
                  to="/programs/software-engineering"
                >
                  Software Engineering
                </Link>
                <Link
                  onClick={handleCloseSidebar}
                  className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
                  to="/programs/ui-ux-design"
                >
                  UI/UX Design
                </Link>
                <Link
                  onClick={handleCloseSidebar}
                  className="px-3 py-3 text-sm font-semibold text-neutral hover:bg-neutral hover:text-fair"
                  to="/programs/project-management"
                >
                  Project Management
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              onClick={handleCloseSidebar}
              className="text-neutral"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseSidebar}
              className="text-neutral"
              to="/jobs"
            >
              Jobs
            </Link>
          </li>
        </ul>

        <Link className="" to="">
          <Button type="filled" text="Explore Our Programmes" />
        </Link>
      </div>
    </div>
  );
};
