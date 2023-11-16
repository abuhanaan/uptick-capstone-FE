import React from "react";
import { Joblist } from "./section/Joblist";

export const Jobs = () => {
  return (
    <section className="mt-20">
      <div className="container py-10">
        <h2 className="font-bold text-xl md:text-2xl mb-6">Featured Jobs</h2>

        <Joblist />
      </div>
    </section>
  );
};
