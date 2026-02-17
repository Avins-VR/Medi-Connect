import React, { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("patient");

  // 🔹 STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔐 STRONG PASSWORD VALIDATION
  const isStrongPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // 🔹 SIGNUP HANDLER
  const handleSignup = async () => {
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!isStrongPassword(password)) {
      setError(
        "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://medi-connect-rncy.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Account created successfully! Please sign in.");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("patient");
    } catch (err) {
      setError("Server error. Please try again later.");
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
      <h1
        className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 
        text-2xl md:text-3xl font-bold text-gray-800 text-center"
      >
        Medi Connect
      </h1>

      <div className="w-full max-w-[450px] mt-20 md:mt-20 bg-white/30 
        backdrop-blur-4xl rounded-3xl p-6 md:p-8 border-2 border-gray-400">

        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white shadow-md rounded-xl py-3 px-4">
            <i className="bi bi-person-plus text-2xl text-gray-900"></i>
          </div>
        </div>

        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800">
          Create your account
        </h2>

        <p className="text-center text-gray-600 text-sm mt-3 leading-relaxed">
          Join Health Connect and manage your health,
          <br className="hidden md:block" />
          appointments & daily wellness
        </p>

        {/* NAME */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-person text-gray-500 mr-3"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            />
          </div>
        </div>

        {/* EMAIL */}
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

        {/* PASSWORD */}
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
              className={`bi ${
                showPassword ? "bi-eye" : "bi-eye-slash"
              } text-gray-500 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-lock-fill text-gray-500 mr-3"></i>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            />
            <i
              className={`bi ${
                showConfirmPassword ? "bi-eye" : "bi-eye-slash"
              } text-gray-500 cursor-pointer`}
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            ></i>
          </div>
        </div>

        {/* ROLE */}
        <div className="mt-6">
          <div className="flex items-center bg-white/80 rounded-lg px-3 py-3 shadow-sm">
            <i className="bi bi-person-badge text-gray-500 mr-3"></i>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 text-sm md:text-base"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        </div>

        {/* ERROR / SUCCESS */}
        {error && (
          <p className="text-red-600 text-sm text-center mt-4">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center mt-4">
            {success}
          </p>
        )}

        {/* BUTTON */}
        <button
          className="w-full bg-black text-white py-3 rounded-xl mt-6 font-medium hover:bg-gray-900 transition text-sm md:text-base"
          onClick={handleSignup}
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-600">
            Or sign up with
          </span>
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

        <p className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{" "}
          <a
            href="/Login"
            className="text-blue-700 cursor-pointer hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
