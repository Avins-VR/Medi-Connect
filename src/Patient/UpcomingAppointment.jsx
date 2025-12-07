import React from "react";
import Patientdashboard from "./Patientdashboard";

export default function UpcomingAppointment() {
  return (
    <Patientdashboard>
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-6xl h-[550px] bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Appointment Date</h2>

            {/* Calendar Box */}
            <div className="bg-indigo-50 p-5 rounded-xl shadow-md">
              <div className="text-center mb-6 text-lg font-medium text-indigo-700">
                November 2025
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <div key={d} className="font-semibold text-gray-600">
                    {d}
                  </div>
                ))}

                {/* Dummy days */}
                {[...Array(3)].map((_, i) => (
                  <div key={i}></div>
                ))}

                {/* Example dates */}
                {[...Array(30)].map((_, i) => {
                  const date = i + 1;
                  const isBooked = date === 18;

                  return (
                    <div
                      key={i}
                      className={`py-2 rounded-lg ${
                        isBooked
                          ? "bg-indigo-600 text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-200 cursor-pointer"
                      }`}
                    >
                      {date}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cancel Button */}
            <button className="w-full mt-10 bg-indigo-600 text-white py-3 rounded-xl shadow hover:bg-indigo-700">
              Cancel Appointment
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-10">

            {/* TIME */}
            <div>
              <h3 className="text-xl mt-2 font-semibold text-gray-800">Time</h3>
              <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow text-gray-700 text-base">
                04:30 PM
              </div>
            </div>

            {/* CONSULTATION + DOCTOR */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Consultation Type
                </h3>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow text-gray-700 text-base">
                  General Consultation
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Doctor Name
                </h3>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow text-gray-700 text-base">
                  Dr. Sarah Mitchell
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Message</h3>
              <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow text-gray-700 text-base leading-relaxed">
                I have been experiencing mild headaches for the past few days.
                Please check and provide guidance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Patientdashboard>
  );
}
