import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const ProgramCard = ({ program }) => {
  return (
    <div className="rounded-md bg-program-bg p-5 flex flex-col">
      <div>
        <img src={program.img} alt="program card" />
      </div>

      <div className="mt-2">
        <h3 className="text-white text-md font-semibold">{program.label}</h3>
        <p className="text-xs text-neutral my-4 ">{program.text}</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Link to="">
          <Button type="filled" text="Apply now" />
        </Link>
        <Link to="">
          <Button type="outlined" text="Learn More" />
        </Link>
      </div>
    </div>
  );
};
