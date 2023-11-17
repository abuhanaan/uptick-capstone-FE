import React from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../context/AppContext";

export const ViewJobDetails = () => {
  let { openModal, handleCloseModal } = useAppContext();
  return (
    <section
      className={`bg-plain w-full fixed top-0 left-0 h-screen z-[100] py-10  ${
        openModal
          ? "scale-100 transition duration-500 ease-out"
          : "scale-0 transition duration-150 ease-out"
      }`}
    >
      <div className="flex justify-center  h-[100%] w-full">
        <div className="bg-light-slate-gray rounded-md p-6 w-[90%] sm:w-[500px]">
          <div className="flex justify-between items-center pb-2 border-b-[1px] border-solid border-neutral">
            <h3 className="font-semibold text-lg">Job Details</h3>
            <span>
              <IoClose
                onClick={() => handleCloseModal()}
                className="text-2xl cursor-pointer"
              />
            </span>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-1 items-center">
              <span className="text-sm">
                Job ID: <small className="font-bold">45544</small>
              </span>
            </div>
            <div>
              <span className="text-sm">
                Job Title:{" "}
                <small className="font-bold">
                  Software Enginner (Forntend)
                </small>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-1 items-center">
              <span className="text-sm">
                Start Date: <small className="font-bold">18th Nov 2020</small>
              </span>
            </div>
            <div>
              <span className="text-sm">
                End Date: <small className="font-bold">18th Nov 2020</small>
              </span>
            </div>
          </div>

          <div className="mt-4 border-t-[1px] border-solid border-neutral">
            <div>
              <h2 className="text-sm font-bold mt-2">Description</h2>
              <p className="text-sm mt-2 text-justify">
                We’re looking for exceptional software engineers to join our
                team in doing the hard work that makes our users’ lives easy. We
                run on a mix of Clojure and JavaScript (and TypeScript), and the
                ideal candidate has shipped production code in one or more of
                these languages...
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-20">
            <button
              onClick={() => handleCloseModal()}
              className="bg-red-600 w-full text-sm font-semibold text-white px-[14px] py-[8px] rounded-md  flex items-center justify-center active:translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
