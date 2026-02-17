import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     SHOW LOGOUT MESSAGE
  ========================= */
  useEffect(() => {
    if (location.state?.loggedOut) {
      setInfo("You have been logged out successfully");
    }
  }, [location]);

useEffect(() => {

  // ✅ ADD THIS LINE
  if (location.pathname === "/login") return;

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user?.role) {
    if (user.role === "doctor") {
      navigate("/Doctor/home");
    } else {
      navigate("/Patient/home");
    }
  }
}, [navigate, location.pathname]);


  /* =========================
     LOGIN HANDLER
  ========================= */
  const handleLogin = async () => {
    setError("");
    setInfo("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("https://medi-connect-rncy.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT token and user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ROLE BASED REDIRECT
      if (data.user.role === "doctor") {
        navigate("/Doctor/home");
      } else {
        navigate("/Patient/home");
      }
    } catch (err) {
      setError("Server not reachable. Try again later.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#91C8E4] to-white relative overflow-hidden px-4">

      {/* Soft curved arcs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[120%] h-[120%] rounded-full"></div>
        <div className="absolute w-[140%] h-[140%] rounded-full"></div>
        <div className="absolute w-[160%] h-[160%] rounded-full"></div>
      </div>

      {/* Title */}
      <h1 className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 
        text-xl md:text-3xl font-bold text-gray-800 text-center">
        Medi Connect
      </h1>

      {/* Card */}
      <div className="w-full max-w-[450px] mt-20 bg-white/30 
        backdrop-blur-4xl rounded-3xl p-6 md:p-8 border-2 border-gray-400">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white shadow-md rounded-xl py-3 px-4">
            <i className="bi bi-box-arrow-in-right text-2xl text-gray-900"></i>
          </div>
        </div>

        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800">
          Sign in with email
        </h2>

        <p className="text-center text-gray-600 text-sm mt-3 leading-relaxed">
          A smarter way to track your health, appointments,
          <br className="hidden md:block" /> and daily wellness
        </p>

        {/* INFO MESSAGE (LOGOUT SUCCESS) */}
        {info && (
          <p className="text-green-600 text-sm text-center mt-4">
            {info}
          </p>
        )}

        {/* Email */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-envelope text-gray-500 mr-3"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-lock text-gray-500 mr-3"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm text-center mt-4">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          className="w-full bg-black text-white py-3 rounded-xl mt-6 font-medium hover:bg-gray-900 transition text-sm md:text-base"
          onClick={handleLogin}
        >
          Get Started
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-600">Or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social */}
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
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
