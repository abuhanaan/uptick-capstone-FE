import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export const Job = ({ job }) => {
  return (
    <div className="rounded-md border-[1px] bg-testimonial-bg border-neutral border-solid py-6 flex items-center">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            className="w-full h-full lg:object-contain"
            src={job.img}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between flex-1 md:flex-[2] gap-3">
          <p className="text-sm">Job ID</p>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-sm">{job.desc}</p>
            <div className="flex gap-3 mt-4 items-center">
              <span className="font-bold text-sm">Deadline</span>
              <span className="text-xs">{job.due}</span>
            </div>
          </div>

          <Link to="/jobs/1">
            <Button text="Apply For This Job" type="filled" />
          </Link>
        </div>
      </div>
    </div>
  );
};
