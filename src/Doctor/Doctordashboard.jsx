import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Doctordashboard({ children }) {
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

          <NavLink
            to="/Doctor/home"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white/30 text-white font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/DailyAppointments"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            Daily Appointments
          </NavLink>

          <NavLink
            to="/PatientManagement"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            Patient Management
          </NavLink>

          <NavLink
            to="/MedicalSchedulePlanner"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            Medical Schedule Planner
          </NavLink>

          <NavLink
            to="/ConsultationOverview"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            Consultation Overview
          </NavLink>
        </nav>

        <button className="mt-auto px-4 py-2 rounded-lg hover:bg-white/10 transition text-left">
          Sign Out
        </button>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col lg:ml-[260px]">

        {/* TOP BAR */}
        <header
          className="
            fixed top-0
            left-0 lg:left-[289px]
            w-full lg:w-[calc(100%-289px)]
            bg-white border-b
            px-4 py-3
            flex justify-between items-center
            shadow-sm z-30
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <button
              className="lg:hidden text-2xl text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="bi bi-list"></i>
            </button>

            <button
              onClick={() => navigate("/AddPatient")}
              className="
                px-3 py-1.5 sm:px-4 sm:py-2
                bg-indigo-800 text-white
                rounded-lg hover:bg-indigo-700
                text-sm sm:text-base
              "
            >
              + Add Patient
            </button>
          </div>

          {/* PROFILE */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/Doctor/profile")}
          >
            <span className="hidden sm:block font-medium text-gray-700 text-base">
              Dr. Aljin John
            </span>
            <i className="bi bi-person-circle text-2xl text-gray-700"></i>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            px-4 sm:px-6
            lg:pl-9 lg:pr-6
            py-6
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

export default Doctordashboard;
