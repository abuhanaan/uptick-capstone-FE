import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

const AdminSideBar = () => {
  let { adminSidebarOpen } = useAppContext();

  const sidebarItems = [
    { label: "Home", link: "/admin/home" },
    { label: "Jobs", link: "/admin/jobs" },
    { label: "Applications", link: "/admin/applications" },
    { label: "Programs", link: "/admin/programs" },
    { label: "Blogs", link: "/admin/blogs" },
    { label: "Requests", link: "/admin/requests" },
  ];

  return (
    <nav
      className={`bg-plain flex flex-col gap-36 transition-all duration-300 ease   ${
        adminSidebarOpen ? "w-[240px] px-4 py-4 " : "w-0 overflow-hidden"
      }`}
    >
      <ul className="flex flex-col gap-6">
        {sidebarItems.map((item, index) => (
          <li
            className=" transition duration-500 ease-out hover:translate-x-4"
            key={index}
          >
            <Link to={item.link} className="text-white hover:text-gray-300 p-2">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="">
        <button className="bg-red-600 w-full text-sm font-semibold text-white px-[14px] py-[8px] rounded-md  flex items-center justify-center active:translate-y-1">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminSideBar;
