import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#91C8E4] to-white relative overflow-hidden px-4">

      {/* Soft curved arcs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[120%] h-[120%] rounded-full"></div>
        <div className="absolute w-[140%] h-[140%] rounded-full"></div>
        <div className="absolute w-[160%] h-[160%] rounded-full"></div>
      </div>

      {/* Title on top */}
      <h1 className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 
        text-xl md:text-3xl font-bold text-gray-800 text-center">
        Medi Connect
      </h1>

      {/* Card */}
      <div className="w-full max-w-[450px] mt-20 md:mt-20 bg-white/30 
        backdrop-blur-4xl rounded-3xl p-6 md:p-8 border-2 border-gray-400">

        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white shadow-md rounded-xl py-3 px-4">
            <i className="bi bi-box-arrow-in-right text-2xl text-gray-900"></i>
          </div>
        </div>

        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800">
          Sign in with email
        </h2>

        <p className="text-center text-gray-600 text-sm mt-3 leading-relaxed">
          A smarter way to track your health, appointments,<br className="hidden md:block"/> and daily wellness
        </p>

        {/* Email Input */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-envelope text-gray-500 mr-3"></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-lock text-gray-500 mr-3"></i>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            />

            <i
              className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} text-gray-500 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <p className="text-right mt-3 text-sm text-gray-600 cursor-pointer hover:underline">
            Forgot password?
          </p>
        </div>

        <button
          className="w-full bg-black text-white py-3 rounded-xl mt-6 font-medium hover:bg-gray-900 transition text-sm md:text-base"
          onClick={() => navigate("/Patient/home")}
      >
          Get Started
        </button>


        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-600">Or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 md:gap-8">
          <button className="bg-white py-3 px-4 shadow-md rounded-xl border border-gray-300">
            <i className="bi bi-google text-xl text-gray-700"></i>
          </button>
          <button className="bg-white py-3 px-4 shadow-md rounded-xl border border-gray-300">
            <i className="bi bi-facebook text-xl text-gray-700"></i>
          </button>
          <button className="bg-white py-3 px-4 shadow-md rounded-xl border border-gray-300">
            <i className="bi bi-apple text-xl text-gray-700"></i>
          </button>
        </div>
        <p className="mt-6 text-center text-gray-600 text-xs sm:text-sm">
          Don’t have an account?{" "}
          <a href="/Signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
