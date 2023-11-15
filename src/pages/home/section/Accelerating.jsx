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

          <div>
            <img src="/images/globe.png" alt="globe" />
          </div>
        </div>
      </div>
    </div>
  );
};
