import React from "react";
import { blogs } from "../../../constant/data";
import { BlogCard } from "../../../components/BlogCard";

export const Blog = () => {
  return (
    <div className="bg-fair py-12">
      <div className="container">
        <div className="flex gap-2 items-center">
          <div className="w-1 h-20 bg-primary-blue"></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-2xl">Blog</h3>
            <h2 className="text-white text-3xl font-semibold">Latest News</h2>
          </div>
        </div>

        <div className="mt-14 grid  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};
