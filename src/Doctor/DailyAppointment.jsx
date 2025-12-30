import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      type: "General Consultation",
      name: "Emily Davis",
      phone: "000000000000",
      message: "Patient has mild fever and headache. Advise rest and hydration."
    },
    {
      date: "11/01/25",
      time: "02:00 PM",
      type: "Dental Checkup",
      name: "Michael Wilson",
      phone: "111111111111",
      message: "Patient complained of tooth pain. Possible cavity suspected."
    },
    {
      date: "11/01/25",
      time: "10:15 AM",
      type: "Eye Checkup",
      name: "Sophia Lee",
      phone: "222222222222",
      message: "Routine test showing slight increase in eye pressure."
    },
    {
      date: "11/01/25",
      time: "04:30 PM",
      type: "Cardiology",
      name: "David Miller",
      phone: "333333333333",
      message: "Follow-up after ECG. Condition stable, no abnormalities."
      }
  ];

  return (
    <Doctordashboard>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-6"
      >
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Daily Appointments
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Track today's patient consultations and details
        </p>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block bg-white rounded-2xl shadow border p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-700 text-lg">
                <th className="py-4">Date</th>
                <th className="py-4">Time</th>
                <th className="py-4">Consultation</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ backgroundColor: "#f6f6ff" }}
                  className="border-b text-gray-700"
                >
                  <td className="py-5">{a.date}</td>
                  <td>{a.time}</td>
                  <td>{a.type}</td>
                  <td>
                    <button
                      className="text-indigo-600 font-medium hover:underline"
                      onClick={() => setSelectedAppointment(a)}
                    >
                      View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-4">
          {appointments.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow border p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">{a.date}</span>
                <span className="text-sm font-medium">{a.time}</span>
              </div>

              <p className="font-semibold text-gray-800">{a.type}</p>

              <button
                onClick={() => setSelectedAppointment(a)}
                className="mt-3 text-indigo-600 font-medium text-sm"
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedAppointment && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Appointment Details
                </h2>

                <p className="mb-2"><strong>Name:</strong> {selectedAppointment.name}</p>
                <p className="mb-4"><strong>Phone:</strong> {selectedAppointment.phone}</p>

                <p className="text-gray-700 border-t pt-3">
                  <strong>Message:</strong> {selectedAppointment.message}
                </p>

                <div className="text-right mt-6">
                  <button
                    onClick={() => setSelectedAppointment(null)}
                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Doctordashboard>
  );
}

export default DailyAppointment;
