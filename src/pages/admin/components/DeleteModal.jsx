import React from "react";
import { useAppContext } from "../../../context/AppContext";

export const DeleteModal = ({ onClick }) => {
  let { openDeleteModal } = useAppContext();

  return (
    <section
      className={`bg-plain w-full fixed top-0 left-0 h-screen z-[100] py-10 flex items-center justify-center ${
        openDeleteModal
          ? "scale-100 transition duration-500 ease-out"
          : "scale-0 transition duration-150 ease-out"
      }`}
    >
      <div className="flex justify-center  h-[30%] w-full">
        <div className="bg-light-slate-gray rounded-md p-6 w-[60%] sm:w-[350px]">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <h2 className="text-md font-semibold">
              This item will be Permanently deleted
            </h2>
            <h2 className="text-md font-semibold">
              Are you sure you want to delete this Job
            </h2>
          </div>
          <div className="flex justify-center gap-10 mt-6">
            <button
              onClick={() => onClick()}
              className="bg-green-600 w-14 text-sm font-semibold text-white px-[14px] py-[8px] rounded-md  flex items-center justify-center active:translate-y-1"
            >
              Yes
            </button>
            <button
              onClick={() => onClick()}
              className="bg-red-600 w-14 text-sm font-semibold text-white px-[14px] py-[8px] rounded-md  flex items-center justify-center active:translate-y-1"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
