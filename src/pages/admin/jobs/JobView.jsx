import React from "react";
import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { ViewJobDetails } from "./ViewJobDetails";
import { useAppContext } from "../../../context/AppContext";
import { DeleteModal } from "../components/DeleteModal";

export const JobView = () => {
  let { handleOpenModal, toggleDeleteModal } = useAppContext();
  const jobLists = [
    {
      id: 1,
      title: "Software Enginner (Backend)",
      desc: "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages...",
      startDate: "18th Nov, 2023",
      endDate: "16th Dec, 2023",
    },
    {
      id: 2,
      title: "Software Enginner (Frontend)",
      desc: "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages...",
      startDate: "18th Nov, 2023",
      endDate: "16th Dec, 2023",
    },
    {
      id: 3,
      title: "Software Enginner (Mobile Developer)",
      desc: "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages...",
      startDate: "18th Nov, 2023",
      endDate: "16th Dec, 2023",
    },
  ];

  return (
    <div className="h-[100%] overflow-auto w-full px-4 py-6">
      <div className="h-[100%] overflow-auto">
        <h2 className="text-2xl text-neutral mb-4">Job Lists</h2>

        <div className="w-[800px] sm:w-[1160px]  overflow-auto h-[100%] p-4 bg-light-slate-gray">
          <table className="w-full">
            <thead>
              <tr className="w-full border-solid border-neutral border-b-[1px]">
                <th className="w-1/12 text-left text-xs font-bold">Job ID</th>
                <th className="w-2/12 text-left text-xs font-bold">Title</th>
                <th className="w-4/12 text-left text-xs font-bold">
                  Descrition
                </th>
                <th className="w-2/12 text-left text-xs font-bold">
                  Start Date
                </th>
                <th className="w-2/12 text-left text-xs font-bold">End Date</th>
                <th className="w-1/12 text-left text-xs font-bold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {jobLists?.map((job) => (
                <tr
                  key={job.id}
                  className="border-solid border-neutral border-b-[1px]"
                >
                  <td className="text-sm font-bold">{job.id}</td>
                  <td className="text-sm font-semibold p-1">{job.title}</td>
                  <td className="text-sm text-justify pr-2 leading-3 [word-spacing:-1px]">
                    {job.desc.slice(0, 60)}
                  </td>
                  <td className="text-xs">{job.startDate}</td>
                  <td className="text-xs">{job.endDate}</td>
                  <td className="py-1 flex gap-3 items-center mt-1">
                    <button
                      onClick={() => handleOpenModal()}
                      className=" bg-primary-blue p-2 rounded-md font-semibold cursor-pointer text-white"
                    >
                      <GrFormView className="text-lg" />
                    </button>

                    <button
                      onClick={() => toggleDeleteModal()}
                      className="text-xs bg-red-500 p-2 rounded-md font-semibold cursor-pointer text-white"
                    >
                      <MdDelete className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-14 flex items-center justify-end gap-8">
            <Link to="/admin/jobs/create">
              <button className="text-sm bg-primary-blue w-24 h-8 rounded-md font-semibold cursor-pointer text-white">
                Create Job
              </button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center cursor-pointer w-[60px] h-[25px] text-sm bg-transparent border-solid border-neutral border-[1px]">
                prev
              </div>

              <div className="flex items-center rounded-md bg-gray-300 gap-2 p-1">
                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center bg-primary-blue text-white ">
                  1
                </div>
                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center  text-white ">
                  2
                </div>
                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center  text-white ">
                  3
                </div>
              </div>

              <div className="flex justify-center items-center cursor-pointer w-[60px] h-[25px] text-sm bg-transparent border-solid border-neutral border-[1px]">
                next
              </div>
            </div>
          </div>
        </div>
      </div>

      <ViewJobDetails />
      <DeleteModal onClick={toggleDeleteModal} />
    </div>
  );
};
