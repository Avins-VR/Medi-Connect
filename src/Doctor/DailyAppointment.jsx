import React, { useState } from "react";
import Doctordashboard from "./Doctordashboard";

function DailyAppointment() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      date: "11/01/25",
      time: "10:30 AM",
      type: "General Consultation",
      name: "John Doe",
      phone: "123-456-7890",
      message: "Patient has mild fever and headache. Advise rest and hydration."
    },
    {
      date: "11/01/25",
      time: "01:15 PM",
      type: "Dental Checkup",
      name: "Jane Smith",
      phone: "987-654-3210",
      message: "Patient complained of tooth pain. Possible cavity suspected."
    },
    {
      date: "11/01/25",
      time: "09:00 AM",
      type: "Eye Checkup",
      name: "Alice Johnson",
      phone: "555-123-4567",
      message: "Routine test showing slight increase in eye pressure."
    },
    {
      date: "11/01/25",
      time: "03:45 PM",
      type: "Cardiology",
      name: "Bob Brown",
      phone: "444-987-6543",
      message: "Follow-up after ECG. Condition stable, no abnormalities."
    },
    {
        date: "11/01/25",
        time: "11:30 AM",
        type: "Dermatology",
        name: "Cathy Green",
        phone: "222-333-4444",
        message: "Skin rash observed. Prescribed topical ointment."
    },
    {
        date: "11/01/25",
        time: "02:00 PM",
        type: "Pediatrics",
        name: "David White",
        phone: "333-444-5555",
        message: "Routine pediatric checkup. Growth and development normal."
    }
  ];

  return (
    <Doctordashboard>
      <div className="w-full max-w-6xl mx-auto p-4">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-5">
          Daily Appointments
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Track today's patient consultations and details
        </p>

        {/* TABLE CARD */}
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-700 text-lg font-semibold border-b">
                <th className="py-4 pl-5">Date</th>
                <th className="py-4 pl-5">Time</th>
                <th className="py-4 pl-5">Consultation Type</th>
                <th className="py-4">More Details</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a, index) => (
                <tr key={index} className="border-b text-sm text-gray-700">
                  <td className="py-5 pl-5">{a.date}</td>
                  <td className="py-5 pl-5">{a.time}</td>
                  <td className="py-5 pl-5">{a.type}</td>

                  {/* CLICKABLE MESSAGE */}
                  <td className="py-5 pl-5">
                    <button
                      className="text-blue-600 font-medium hover:underline"
                      onClick={() => setSelectedAppointment(a)} // Store whole object
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* POPUP MODAL */}
        {selectedAppointment && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-[420px] ml-[300px] p-6 rounded-2xl shadow-xl relative">

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Appointment Details
              </h2>

              {/* Patient Name */}
              <p className="text-gray-800 text-[16px] font-medium mb-4">
                <strong>Name:</strong> {selectedAppointment.name}
              </p>

              {/* Phone Number */}
              <p className="text-gray-700 text-[16px] mb-4">
                <strong>Phone No:</strong> {selectedAppointment.phone}
              </p>

              {/* Message */}
              <p className="text-gray-700 text-[16px] leading-relaxed border-t pt-4">
                <strong>Message:</strong> {selectedAppointment.message}
              </p>

              {/* Close Button */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setSelectedAppointment(null)}
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </Doctordashboard>
  );
}

export default DailyAppointment;
