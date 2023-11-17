import React from "react";
import { Button } from "../../../components/Button";

export const Accelerating = () => {
  return (
    <div className="bg-fair">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-4xl ">
              Accelerating <br /> Technology Progress <br /> and Opportunities
            </h2>

            <p className="text-white text-sm">
              Uptick Talent fuels critical technology progress <br /> by
              empowering the next generation of tech and <br /> business leaders
              across Africa through <br />
              innovative solutions and strategic partnerships.
            </p>

            <Button className="self-start" text="Learn More" type="filled" />
          </div>

          <div className="relative">
            <img src="/images/globe.png" alt="globe" />
            <img
              className="absolute top-[30%] left-[40%]"
              src="/images/Ellipse-one.png"
              alt=""
            />
            <img
              className="absolute top-[50%] left-[20%]"
              src="/images/Ellipse-two.png"
              alt=""
            />
            <img
              className="absolute top-[48%] right-[28%]"
              src="/images/Ellipse-three.png"
              alt=""
            />
            <img
              className="absolute top-[36%] right-[24%]"
              src="/images/Ellipse-four.png"
              alt=""
            />
            <img
              className="absolute top-[20%] left-[44%]"
              src="/images/Ellipse-five.png"
              alt=""
            />
            <img
              className="absolute top-[58%] left-[30%]"
              src="/images/Ellipse-six.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
