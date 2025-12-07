import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-65 h-screen bg-indigo-900 text-white p-6 flex flex-col fixed left-0 top-0">
        

          <h1 className="text-2xl font-bold tracking-wide mb-6">Medi Connect</h1>
        <hr className="border-t border-gray-100/40 mb-4 px-0" />

        <nav className="flex flex-col space-y-3 mt-6 text-gray-200">

          <NavLink
            to="/patient/home"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/30 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/UpcomingAppointment"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Upcoming Appointments
          </NavLink>

          <NavLink
            to="/medicine"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Current Medications
          </NavLink>

          <NavLink
            to="/prescriptions"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Recent Prescriptions
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Health History Timeline
          </NavLink>

          <NavLink
            to="/labresults"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10"
              }`
            }
          >
            Lab Results
          </NavLink>
        </nav>

        <button className="mt-auto px-4 py-2 rounded-lg hover:bg-white/10 text-left transition">
          Sign Out
        </button>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col ml-[260px]">

        {/* TOP BAR */}
        <header className=" fixed top-0 left-[284px] w-[calc(100%-284px)] bg-white border-b p-4 flex justify-between items-center shadow-sm z-50">
          <div className="flex items-center space-x-8 ml-10">
            <button
              onClick={() => navigate("/BookAppointment")}
              className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700"
            >
              Book Appointment
            </button>

            <button 
            onClick={() => navigate("/EmergencyContact")}
            className="text-indigo-700 font-medium hover:underline">
              Emergency Contact
            </button>
          </div>

          <div className="flex items-center space-x-3 mr-8 cursor-pointer"
         onClick={() => navigate("/profile")}
    >
      <span className="font-medium text-gray-700 text-lg">Maria Waston</span>
      <i className="bi bi-person-circle text-2xl text-gray-700"></i>
    </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 pl-7 py-4 pt-24 overflow-y-auto">{children}</main>

      </div>
    </div>
  );
}
export default Layout;