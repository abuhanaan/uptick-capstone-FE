import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAppContext } from "../context/AppContext";

export const Sidebar = () => {
  let { sidebarOpen, setSidebarOpen } = useAppContext();

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div
      onClick={handleCloseSidebar}
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
            <Link className="text-neutral" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-neutral" to="/programs">
              Programs
            </Link>
          </li>
          <li>
            <Link className="text-neutral" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-neutral" to="/jobs">
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
