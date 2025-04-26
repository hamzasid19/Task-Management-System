import React, { useContext, useState } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import image from "../assets/asd.png";
import { UserDataContext } from "../context/UserData";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Toast/Util";

const Register = () => {
  const { regData, setRegData } = useContext(UserDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/auth/register", regData)
      .then((res) => {
        // console.log("User Created Successfully", res.data);
        handleSuccess("User Created Successfully");
      })
      .catch((err) => {
        handleError(err.response.data.message);
      });
    // console.log(regData);
  };

  return (
    <Container extraClasses="px-8 flex flex-col-reverse xs:flex-row justify-between xs:px-3 gap-2">
      <div className="w-full xs:w-1/2 self-center">
        <h1 className="text-2xl font-bold text-center xs:text-left xs:text-3xl my-6">
          Register
        </h1>
        <p className="max-w-md mx-auto text-md text-gray-600  text-center xs:text-left my-6 xs:mx-0 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's
        </p>
        <form
          className="flex flex-col gap-4 my-8 items-center xs:items-start"
          onSubmit={handleSubmit}
        >
          <label className="font-bold text-xl xs:text-2xl ">Username</label>

          <Input
            variant="username"
            data={regData}
            handleChange={handleChange}
          />

          <label className="font-bold text-xl xs:text-2xl xs:mt-8">Email</label>

          <Input variant="email" data={regData} handleChange={handleChange} />

          <label className="font-bold text-xl xs:text-2xl xs:mt-8">
            Password
          </label>

          <Input
            variant="password"
            data={regData}
            handleChange={handleChange}
          />
          <Button
            text="Register"
            extraClasses="xs:mt-8 xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4"
          />
        </form>
      </div>
      <img className="w-full xs:w-1/2" src={image} alt="" />
      <ToastContainer />
    </Container>
  );
};

export default Register;
