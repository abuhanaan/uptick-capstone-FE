import React from "react";
import { jobs } from "../../../constant/data";
import { Job } from "./Job";

export const Joblist = () => {
  return (
    <div className="flex flex-col gap-8">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};
