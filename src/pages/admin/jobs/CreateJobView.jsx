import React from "react";
import { AdminNavbar } from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";
import { CreateJobForm } from "./CreateJobForm";

export const CreateJobView = () => {
  return (
    <section className="mt-20  bg-fair min-h-[50vh]">
      <div className="min-h-[50vh]">
        <AdminNavbar />

        <div className="flex gap-6">
          <AdminSideBar />
          <CreateJobForm />
        </div>
      </div>
    </section>
  );
};
