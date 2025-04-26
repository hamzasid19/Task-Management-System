import React from "react";

const Container = ({ children, extraClasses }) => {
  return (
    <div className={`max-w-7xl mx-auto py-4 ${extraClasses}`}>{children}</div>
  );
};

export default Container;
