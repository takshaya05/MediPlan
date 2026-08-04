import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const InputField = ({
  label,
  instruction,
  name,
  type,
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-1">

    <label className="text-sm font-medium text-[#b8d8dc]">
      {label}
    </label>

    <span className="text-xs text-[#9fb8c2] leading-tight">
      {instruction}
    </span>

    <input
      type={type}
      name={name}
      className="w-full p-2.5 rounded-lg border border-[#6B7D7F]/30 focus:outline-none focus:border-[#00d9d9] text-sm text-[#d9ffff] bg-transparent"
      value={value}
      onChange={onChange}
      required
    />

  </div>
);


InputField.propTypes = {
  label: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


function GetStarted() {

  const navigate = useNavigate();


  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });



  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[0-9]{6}$/;



  const handleSignupChange = (e) =>
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });



  const handleLoginChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });



  const handleSignupSubmit = (e) => {

    e.preventDefault();


    if (!nameRegex.test(signupData.name)) {
      alert("Only alphabets allowed in name");
      return;
    }


    if (!emailRegex.test(signupData.email)) {
      alert("Enter valid email format");
      return;
    }


    if (!passwordRegex.test(signupData.password)) {
      alert("Password must be 6 digit numeric PIN");
      return;
    }


    localStorage.setItem(
      "user",
      JSON.stringify(signupData)
    );


    alert("Account created successfully. Login now.");


    setSignupData({
      name: "",
      email: "",
      password: "",
    });

  };



  const handleLoginSubmit = (e) => {

    e.preventDefault();


    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );


    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }


    if (loginData.email !== storedUser.email) {
      alert("Invalid email");
      return;
    }


    if (loginData.password !== storedUser.password) {
      alert("Incorrect password");
      return;
    }


    alert("Logged in successfully");


    navigate("/dashboard", {
      state: {
        user: storedUser,
      },
    });

  };



  const handleForgotPassword = () => {
    alert("Password reset link sent to your email");
  };



  return (

    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-10">


      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        style={{
          backgroundImage: "url('/Bgd.png')",
        }}
      ></div>


      <div className="absolute inset-0 bg-[#10284E]/90"></div>



      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-4">



        <h1 className="text-4xl font-bold text-center text-[#d9ffff]">
          Get Started
        </h1>



        <div className="grid md:grid-cols-2 gap-6">



          <div className="border border-[#6B7D7F]/30 rounded-2xl p-4 backdrop-blur-xl flex flex-col gap-3 bg-[#10284E]/40">


            <h2 className="text-xl font-semibold text-center text-[#7ee7e7]">
              Create Account
            </h2>



            <form
              className="flex flex-col gap-3"
              onSubmit={handleSignupSubmit}
            >


              <InputField
                label="Full Name"
                instruction="Only alphabets (John Smith)"
                name="name"
                type="text"
                value={signupData.name}
                onChange={handleSignupChange}
              />


              <InputField
                label="Email"
                instruction="user@gmail.com"
                name="email"
                type="email"
                value={signupData.email}
                onChange={handleSignupChange}
              />


              <InputField
                label="PIN Password"
                instruction="6 digit numeric PIN only"
                name="password"
                type="password"
                value={signupData.password}
                onChange={handleSignupChange}
              />



              <button
                className="w-full bg-linear-to-r from-[#004955] to-[#105E60] text-white py-2.5 rounded-xl hover:from-[#105E60] hover:to-[#14365C] transition text-sm mt-1"
              >
                Create Account
              </button>


            </form>


          </div>





          <div className="border border-[#6B7D7F]/30 rounded-2xl p-4 backdrop-blur-xl flex flex-col gap-3 bg-[#10284E]/40">



            <h2 className="text-xl font-semibold text-center text-[#7ee7e7]">
              Login
            </h2>




            <form
              className="flex flex-col gap-3"
              onSubmit={handleLoginSubmit}
            >



              <InputField
                label="Email"
                instruction="user@gmail.com"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
              />



              <InputField
                label="PIN Password"
                instruction="6 digit numeric PIN only"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />



              <div className="flex flex-col gap-2 mt-2">



                <button
                  className="w-full bg-linear-to-r from-[#004955] to-[#105E60] text-white py-2.5 rounded-xl hover:from-[#105E60] hover:to-[#14365C] transition text-sm"
                >
                  Login
                </button>



                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-[#b8d8dc] hover:text-[#7ee7e7] text-right"
                >
                  Forgot Password?
                </button>



              </div>



            </form>



          </div>



        </div>



      </div>



    </div>

  );

}


export default GetStarted;