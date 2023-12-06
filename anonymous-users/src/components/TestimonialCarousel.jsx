import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(2);
    }
    let prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const nextSlide = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex === 3) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="mt-10 ">
      <div
        style={{
          transform: `${`translateX(-${currentIndex * (100 / 3)}%)`}`,
        }}
        className={`transition duration-700 ease-out  w-[98vw] flex items-center flex-col lg:flex-row justify-center gap-6 overflow-hidden`}
      >
        <div className="w-[80%] lg:w-[33%]  bg-fair rounded-md py-4 px-6 flex flex-col gap-5">
          <p className="text-sm text-neutral">
            At Megas Agriculture, our journey has been nothing short of
            transformative, owing much of our success to the indispensable
            guidance from Startup School. Our elation knows no bounds,
            propelling our farm-to-market platform's growth from servicing 700
            farmers to an astounding 4000. This monumental achievement stands as
            a testament to the efficacy of the strategies we imbibed during our
            time at the Cohort, solidifying our commitment to revolutionizing
            the agricultural industry.
          </p>

          <Link className="flex gap-2 items-center">
            <span className="text-primary-blue font-semibold text-sm">
              Megas Agriculture
            </span>
            <span>
              <FaLocationArrow className="text-white text-sm" />
            </span>
          </Link>

          <FaQuoteRight className="self-end text-white" />
        </div>
        <div className="w-[80%] lg:w-[33%]  bg-fair rounded-md py-4 px-6 flex flex-col gap-5">
          <p className="text-sm text-neutral">
            At Megas Agriculture, our journey has been nothing short of
            transformative, owing much of our success to the indispensable
            guidance from Startup School. Our elation knows no bounds,
            propelling our farm-to-market platform's growth from servicing 700
            farmers to an astounding 4000. This monumental achievement stands as
            a testament to the efficacy of the strategies we imbibed during our
            time at the Cohort, solidifying our commitment to revolutionizing
            the agricultural industry.
          </p>

          <Link className="flex gap-2 items-center">
            <span className="text-primary-blue font-semibold text-sm">
              Megas Agriculture
            </span>
            <span>
              <FaLocationArrow className="text-white text-sm" />
            </span>
          </Link>

          <FaQuoteRight className="self-end text-white" />
        </div>
        <div className="w-[80%] lg:w-[33%]  bg-fair rounded-md py-4 px-6 flex flex-col gap-5">
          <p className="text-sm text-neutral">
            At Megas Agriculture, our journey has been nothing short of
            transformative, owing much of our success to the indispensable
            guidance from Startup School. Our elation knows no bounds,
            propelling our farm-to-market platform's growth from servicing 700
            farmers to an astounding 4000. This monumental achievement stands as
            a testament to the efficacy of the strategies we imbibed during our
            time at the Cohort, solidifying our commitment to revolutionizing
            the agricultural industry.
          </p>

          <Link className="flex gap-2 items-center">
            <span className="text-primary-blue font-semibold text-sm">
              Megas Agriculture
            </span>
            <span>
              <FaLocationArrow className="text-white text-sm" />
            </span>
          </Link>

          <FaQuoteRight className="self-end text-white" />
        </div>
      </div>

      <div className="hidden lg:flex justify-center gap-6 py-10">
        <div
          onClick={prevSlide}
          className="w-[40px] h-[40px] cursor-pointer rounded-full bg-neutral flex justify-center items-center text-white text-sm"
        >
          <FaArrowLeft />
        </div>
        <div
          onClick={nextSlide}
          className="w-[40px] h-[40px] cursor-pointer rounded-full bg-neutral flex justify-center items-center text-sm"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
