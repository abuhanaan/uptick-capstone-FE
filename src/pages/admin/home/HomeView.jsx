import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { RiMiniProgramLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";

export const HomeView = () => {
  const menuDetails = [
    { id: 1, num: 873, label: "Jobs", icon: <MdWorkOutline /> },
    {
      id: 2,
      num: 473,
      label: "Applications",
      icon: <MdSettingsApplications />,
    },
    { id: 3, num: 117, label: "Programs", icon: <RiMiniProgramLine /> },
    { id: 4, num: 203, label: "Blogs", icon: <FaBlog /> },
    { id: 5, num: 467, label: "Request", icon: <MdRequestPage /> },
  ];
  return (
    <div className="h-[100%] overflow-auto w-full px-4 py-6">
      <div className="w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {menuDetails.map((menu) => (
            <div
              key={menu.id}
              className="rounded-lg h-[150px] flex justify-center p-1 md:p-4 bg-primary-blue"
            >
              <div className="flex gap-4 items-center justify-center">
                <div className="flex flex-col gap0">
                  <h2 className="text-4xl text-white font-semibold">
                    {menu.num}
                  </h2>
                  <p className="text-white text-lg font-semibold">
                    {menu.label}
                  </p>
                </div>
                <div>
                  <span className="text-white text-4xl">{menu.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
