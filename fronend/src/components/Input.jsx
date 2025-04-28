import React from "react";

const Input = ({
  variant,
  data,
  handleChange,
  extraClasses,
  inputName,
  placeholder,
}) => {
  return (
    <>
      {variant === "email" ? (
        <input
          className={`xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4 p-2 text-xl outline-black bg-gray-100 rounded-xs
             ${extraClasses}`}
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : variant === "password" ? (
        <input
          className={`xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4 p-2 text-xl outline-black bg-gray-100 rounded-xs
             ${extraClasses}`}
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : variant === "username" ? (
        <input
          className={`xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4 p-2 text-xl outline-black bg-gray-100 rounded-xs
             ${extraClasses}`}
          type="text"
          name="username"
          id="username"
          value={data.username}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : variant === "text" ? (
        <input
          className={`xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4 p-2 text-xl outline-black bg-gray-100 rounded-xs
             ${extraClasses}`}
          type="text"
          name={inputName}
          id="text"
          value={data}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : variant === "checkbox" ? (
        <input
          className={` outline-black bg-gray-100 rounded-xs
             ${extraClasses}`}
          type="checkbox"
          name={inputName}
          id="checkbox"
          value={data}
          checked={data ? true : false}
          onChange={handleChange}
        />
      ) : null}
    </>
  );
};

export default Input;
