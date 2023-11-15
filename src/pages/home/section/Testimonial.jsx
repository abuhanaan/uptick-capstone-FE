import React from "react";
import { TestimonialCarousel } from "../../../components/TestimonialCarousel";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export const Testimonial = () => {
  return (
    <div className="bg-testimonial-bg py-10">
      <div className="container">
        <h2 className="text-center text-xl md:text-2xl">
          Testimonial and Success Stories
        </h2>

        <div>
          <TestimonialCarousel />
        </div>

        <div className="mt-10 w-full">
          <p className="w-[90%] md:w-[50%] text-center mx-auto">
            These success stories are just a glimpse of what can be achieved
            with the guidance and resources Uptick Talent offers. We are
            committed to shaping the future of tech and business, one success
            story at a time.
          </p>
        </div>

        <div className="mt-10 w-[90%] md:w-[400px] mx-auto rounded-md px-4 py-6 min-h-52 bg-fair flex justify-center items-center">
          <div className="w-[95%] mx-auto flex flex-col gap-4 items-center">
            <h2 className="text-white text-md  md:text-2xl">
              Join Us in Shaping the Future!
            </h2>

            <p className="text-neutral text-sm text-center">
              Uptick Talent is your gateway to a world of opportunities in
              technology and business. Start your journey with us today!
            </p>

            <Link>
              <Button text="Explore More Programs" type="filled" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
