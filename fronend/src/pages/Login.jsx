import React, { useContext } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import image from "../assets/asd.png";
import { UserDataContext } from "../context/UserData";
import axios from "axios";
import { handleError, handleSuccess } from "../Toast/Util";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { loginData, setLoginData } = useContext(UserDataContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        loginData
      );

      handleSuccess("Logged In Successfully");
      localStorage.setItem("username", res.data.name);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  return (
    <Container extraClasses="px-8 flex flex-col-reverse xs:flex-row justify-between xs:px-3 gap-2">
      <div className="w-full xs:w-1/2 self-center">
        <h1 className="text-2xl font-bold text-center xs:text-left xs:text-3xl my-6">
          Login
        </h1>
        <p className="max-w-md mx-auto text-md text-gray-600 text-center xs:text-left my-6 xs:mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's
        </p>
        <form
          className="flex flex-col gap-4 my-8 items-center xs:items-start"
          onSubmit={handleSubmit}
        >
          <label className="font-bold text-xl xs:text-2xl">Email</label>

          <Input
            variant="email"
            data={loginData}
            handleChange={handleChange}
            placeholder="Enter your email"
          />

          <label className="font-bold text-xl xs:text-2xl">Password</label>

          <Input
            variant="password"
            data={loginData}
            handleChange={handleChange}
            placeholder="Enter your password"
          />
          <Button
            text="Login"
            extraClasses="xs:mt-6 xs:w-3/4 max-[600px]:w-full max-[800px]:w-3/4"
          />
        </form>
      </div>
      <img className="w-full xs:w-1/2" src={image} alt="" />
      <ToastContainer />
    </Container>
  );
};

export default Login;
