import React from "react";
import Patientdashboard  from "./Patientdashboard";

function AppointmentPage() {
  return (
    <Patientdashboard>
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-[1100px] bg-white relative overflow-hidden flex items-center justify-center rounded-3xl">
        <div className="w-[1100px] p-12 bg-white rounded-3xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Book an Appointment
          </h2>

          <div className="space-y-4">
            {/* NAME + PHONE ROW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

  {/* Patient Name */}
  <div>
    <label className="block text-gray-900 font-medium mb-4 pt-6">
      Patient Name
    </label>
    <input
      type="text"
      placeholder="Enter full name"
      className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-4 py-3 outline-none border-none focus:outline-none focus:border-transparent focus:ring-0"
    />
  </div>

  {/* Mobile Number */}
  <div>
    <label className="block text-gray-900 font-medium mb-4 pt-6">
      Mobile Number
    </label>
    <input
      type="text"
      placeholder="9876543210"
      className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-4 py-3 outline-none border-none focus:outline-none focus:border-transparent focus:ring-0"
    />
  </div>

</div>


            {/* Date */}
            {/* DATE + TIME ROW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 pt-6">

  {/* Select Date */}
  <div>
    <label className="block text-gray-900 font-medium mb-6">Pack a Date</label>
    <input
      type="date"
      className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-4 py-3 shadow-sm outline-none text-gray-900 
      "/>
  </div>

  {/* Select Time */}
  <div>
    <label className="block text-gray-900 font-medium mb-6">Pack a Time</label>
    <input
      type="time"
      className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-4 py-3 shadow-sm outline-none text-gray-900 "
    />
  </div>
</div>


{/* CONSULTATION TYPE + DOCTOR ROW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 pt-6">

  {/* Consultation Type */}
  <div>
    <label className="block text-gray-900 font-medium mb-6">Consultation Type</label>
    <select className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-5 py-4 shadow-sm outline-none text-gray-900">
      <option value="">Select Type</option>
      <option value="general">General Consultation</option>
      <option value="dental">Dental Checkup</option>
      <option value="eye">Eye Checkup</option>
      <option value="cardio">Cardiology</option>
    </select>
  </div>

  {/* Doctor Name */}
  <div>
    <label className="block text-gray-900 font-medium mb-6">Doctor Name</label>
    <select className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-5 py-4 shadow-sm outline-none text-gray-900">
      <option value="">Select Type</option>
      <option value="dr-john">Dr. John Mathew</option>
      <option value="dr-sophia">Dr. Sophia Daniel</option>
      <option value="dr-rajesh">Dr. Rajesh Kumar</option>
      <option value="dr-meera">Dr. Meera Prakash</option>
    </select>
  </div>

</div>


{/* MESSAGE INPUT */}
<div className="mt-6">
  <label className="block text-gray-900 font-medium mb-6 pt-6">Message</label>
  <textarea
    rows="6"
    placeholder="Enter any additional details..."
    className="w-full mt-2 bg-gray-100 rounded-xl shadow text-gray-700 text-base px-5 py-4 shadow-sm outline-none text-gray-900 "
  ></textarea>
</div>


            <div className="flex justify-center">
  <button className="w-96 bg-indigo-600 text-white py-4 rounded-xl mt-4 font-semibold hover:bg-indigo-700 transition">
    Get Appointment
  </button>
</div>

          </div>
        </div>
        </div>
    </div>
    </Patientdashboard>
  );
}
export default AppointmentPage;