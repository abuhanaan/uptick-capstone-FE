import React from "react";
import { AdminNavbar } from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";
import { JobView } from "./JobView";

const Jobs = () => {
  return (
    <section className="mt-20  bg-fair min-h-[50vh]">
      <div className="min-h-[50vh]">
        <AdminNavbar />

        <div className="flex gap-6">
          <AdminSideBar />
          <JobView />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
