import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateJobForm = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    requirements: "",
    applicationFormLink: "",
    companyLogo: "",
    applicationDeadline: "",
    startDate: "",
    endDate: "",
  });

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);

    setFormDetails({
      title: "",
      description: "",
      requirements: "",
      applicationFormLink: "",
      companyLogo: "",
      applicationDeadline: "",
      startDate: "",
      endDate: "",
    });

    navigate("/admin/jobs");
  };
  return (
    <div className="h-[100%] overflow-auto w-full px-4 py-6">
      <div className="w-full">
        <h2 className="text-white text-xl mb-3 pb-2 ">Create Job</h2>

        <div className="p-6 bg-light-slate-gray rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3">
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <label className="w-full sm:w-1/2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formDetails.title}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    Application Deadline <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="date"
                    name="applicationDeadline"
                    value={formDetails.applicationDeadline}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    Application link <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="text"
                    required
                    placeholder="app link"
                    name="applicationFormLink"
                    value={formDetails.applicationFormLink}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                    type="text"
                    placeholder="Desc..."
                    required
                    name="description"
                    value={formDetails.description}
                    onChange={handleOnChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    Company Logo <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="file"
                    required
                    name="companyLogo"
                    value={formDetails.companyLogo}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="date"
                    required
                    name="startDate"
                    value={formDetails.startDate}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="flex ">
                  <label className="w-full sm:w-1/2">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                    type="date"
                    required
                    name="endDate"
                    value={formDetails.endDate}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="flex">
                  <label className="w-full sm:w-1/2">
                    Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full sm:w-1/2 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                    type="text"
                    placeholder="Requirements..."
                    required
                    name="requirements"
                    value={formDetails.requirements}
                    onChange={handleOnChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="btn-filled text-md font-bold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
