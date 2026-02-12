import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          w-65 min-h-screen bg-indigo-900 text-white p-6 flex flex-col
          fixed left-0 top-0 z-50
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <h1 className="text-2xl font-bold tracking-wide mb-6">
          Medi Connect
        </h1>

        <hr className="border-t border-gray-100/40 mb-4" />

        <nav className="flex flex-col space-y-3 mt-6 text-gray-200">
          {[
            ["Home", "/patient/home"],
            ["Upcoming Appointments", "/UpcomingAppointment"],
            ["Current Medications", "/medicine"],
            ["Recent Prescriptions", "/prescriptions"],
            ["Health History Timeline", "/history"],
            ["Lab Results", "/labresults"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-white/30 text-white font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
  className="mt-auto px-4 py-2 rounded-lg hover:bg-white/10 transition text-left"
  onClick={() => {
    localStorage.removeItem("token");

    // pass logout info
    navigate("/Login", { state: { loggedOut: true } });
  }}
>
  Sign Out
</button>

      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col lg:ml-[260px]">

        {/* HEADER */}
        <header
  className="
    fixed top-0
    left-0 lg:left-[284px]
    w-full lg:w-[calc(100%-284px)]
    bg-white border-b
    px-3 py-2
    sm:px-4 sm:py-3
    flex justify-between items-center
    shadow-sm z-30
  "
>
  {/* LEFT SECTION */}
  <div className="flex items-center gap-3">

    {/* MOBILE MENU */}
    <button
      className="lg:hidden text-2xl text-gray-700"
      onClick={() => setSidebarOpen(true)}
    >
      <i className="bi bi-list"></i>
    </button>

    {/* ACTION BUTTONS GROUP */}
    <div className="flex items-center gap-4 sm:gap-8 ml-5">
      <button
        onClick={() => navigate("/BookAppointment")}
        className="
          px-3 py-1.5
          sm:px-4 sm:py-2
          text-sm sm:text-base
          bg-indigo-800 text-white
          rounded-lg hover:bg-indigo-700
        "
      >
        Book Appointment
      </button>

      <button
        onClick={() => navigate("/EmergencyContact")}
        className="
          text-sm sm:text-base
          text-indigo-700 font-medium
          hover:underline
        "
      >
        Emergency Contact
      </button>
    </div>
  </div>

  {/* PROFILE SECTION */}
  <div
    className="
      flex items-center gap-2
      ml-4 sm:ml-8
      cursor-pointer
    "
    onClick={() => navigate("/profile")}
  >
    <span className="hidden sm:block font-medium text-gray-700 text-base">
      Patient Profile
    </span>
    <i className="bi bi-person-circle text-2xl text-gray-700"></i>
  </div>
</header>


        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            px-4 sm:px-6
            lg:pl-7 lg:pr-6
            py-6
            ml-3
            pt-20 sm:pt-24
            overflow-y-auto
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
