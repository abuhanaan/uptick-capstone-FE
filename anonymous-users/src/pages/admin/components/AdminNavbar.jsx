import React from "react";
import { ImMenu } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { useAppContext } from "../../../context/AppContext";
import { FaArrowRight } from "react-icons/fa";

export const AdminNavbar = () => {
  let { toggleAdminSidebar, adminSidebarOpen } = useAppContext();

  return (
    <nav className="border-b-[1px] border-primary-blue border-solid px-4 pb-1 mt-6">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-5 items-center ">
          <span>
            {adminSidebarOpen ? (
              <ImMenu
                onClick={() => toggleAdminSidebar()}
                className="text-neutral text-2xl cursor-pointer"
              />
            ) : (
              <FaArrowRight
                onClick={() => toggleAdminSidebar()}
                className="text-neutral text-2xl cursor-pointer"
              />
            )}
          </span>
          <h2 className="text-neutral text-lg sm:text-2xl font-semibold">
            Dashboard
          </h2>
        </div>

        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="search"
            className="text-sm bg-transparent border-[1px] border-gray-400 rounded-md p-2 pr-8 text-neutral focus:outline-none w-"
          />
          <IoSearch className="text-neutral text-xl right-2 absolute top-[25%]" />
        </div>

        <div className="flex gap-2 items-center">
          <div className="">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="/images/little-boy.png"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-neutral text-sm sm:text-lg font-semibold">
              John Doe
            </h3>
            <p className="text-xs md:text-sm text-neutral">Superadmin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
