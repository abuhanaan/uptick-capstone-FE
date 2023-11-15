import React from "react";
import Hero from "./section/Hero";
import { Accelerating } from "./section/Accelerating";
import { WhyChoose } from "./section/WhyChoose";
import { OurPrograms } from "./section/OurPrograms";
import { Blog } from "./section/Blog";
import { Testimonial } from "./section/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Accelerating />
      <WhyChoose />
      <OurPrograms />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
