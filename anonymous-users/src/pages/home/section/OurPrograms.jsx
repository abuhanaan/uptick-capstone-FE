import React from "react";
import { programs } from "../../../constant/data";
import { ProgramCard } from "../../../components/ProgramCard";

export const OurPrograms = () => {
  return (
    <div className="py-20 bg-fair">
      <div className="container">
        <h2 className="text-xl md:text-4xl text-white">Our Programs</h2>

        <div className="mt-6 grid  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};
