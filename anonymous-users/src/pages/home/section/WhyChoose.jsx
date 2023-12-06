import React from "react";
import { whyChooseCards } from "../../../constant/data";
import { MiniCard } from "../../../components/MiniCard";

export const WhyChoose = () => {
  return (
    <div className="pt-20 bg-fair">
      <div className="container">
        <h2 className="text-xl md:text-4xl text-white text-center mb-8">
          Why Choose Uptick Talent?
        </h2>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseCards.map((card) => (
            <MiniCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
