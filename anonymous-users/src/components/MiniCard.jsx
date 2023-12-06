import React from "react";

export const MiniCard = ({ card }) => {
  return (
    <div className="rounded-md bg-neutralTwo flex flex-col gap-4 p-3 md:p-5">
      <div className="flex flex-col gap-2">
        <span className="text-neutral text-3xl">{card.icon}</span>
        <h3 className="text-lg md:text-xl text-primary-blue font-semibold">
          {card.title}
        </h3>
      </div>

      <p className="text-sm text-neutral">{card.text}</p>
    </div>
  );
};
