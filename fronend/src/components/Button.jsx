import React from "react";

const Button = ({ text, handleClick, extraClasses }) => {
  return (
    <button
      className={`bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white py-2 px-4 rounded cursor-pointer hover:opacity-80 ${extraClasses}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
