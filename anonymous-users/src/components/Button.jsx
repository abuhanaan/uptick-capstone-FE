import React from "react";

export const Button = ({ type, text }) => {
  return (
    <button className={type === "filled" ? "btn-filled" : "btn-outlined"}>
      {text}
    </button>
  );
};
