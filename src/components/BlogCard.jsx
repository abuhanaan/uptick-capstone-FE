import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ blog }) => {
  return (
    <div className="bg-program-bg border-[1px] border-light-blue border-solid rounded-md p-3 md:p-5">
      <div>
        <img src={blog.img} alt="Blog img" />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <h2 className="text-white text-sm md:text-xl">{blog.label}</h2>
        <p className="text-xs text-neutral">{blog.text}</p>

        <Link to="" className="text-primary-blue ml-3">
          Learn More
        </Link>
      </div>
    </div>
  );
};
