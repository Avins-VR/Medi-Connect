import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Doctordashboard from "./Doctordashboard";

const STORAGE_KEY = "daily_appointments";

function DailyAppointment() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : [
          {
            date: "11/01/25",
            time: "10:30 AM",
            type: "General Consultation",
            name: "John Doe",
            phone: "123-456-7890",
            message: "Patient has mild fever and headache. Advise rest and hydration.",
          },
          {
            date: "11/01/25",
            time: "01:15 PM",
            type: "Dental Checkup",
            name: "Jane Smith",
            phone: "987-654-3210",
            message: "Patient complained of tooth pain. Possible cavity suspected.",
          },
          {
            date: "11/01/25",
            time: "09:00 AM",
            type: "Eye Checkup",
            name: "Alice Johnson",
            phone: "555-123-4567",
            message: "Routine test showing slight increase in eye pressure.",
          },
        ];
  });

  const [editData, setEditData] = useState({
    date: "",
    time: "",
    type: "",
    name: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  const handleEdit = (a, index) => {
    setEditData(a);
    setEditIndex(index);
    setIsEditMode(true);
    setOpenMenuIndex(null);
  };

  const handleDelete = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
    setOpenMenuIndex(null);
  };

  const handleSaveEdit = () => {
    const updated = [...appointments];
    updated[editIndex] = editData;
    setAppointments(updated);
    setIsEditMode(false);
    setEditIndex(null);
  };
   const heading = "Daily Appointments";

  const letterContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140 },
    },
  };

  return (
    <Doctordashboard>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-6"
      >
        {/* HEADER */}
        <motion.h1
                  variants={letterContainer}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-5 mt-[-20px]"
                >
                  {heading.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterItem}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
        
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
                  <td className="relative">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === i ? null : i)
                      }
                      className="text-xl text-gray-600"
                    >
                      ⋮
                    </motion.button>

                    <AnimatePresence>
                      {openMenuIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg z-20 w-32"
                        >
                          <button
                            onClick={() => {
                              setSelectedAppointment(a);
                              setOpenMenuIndex(null);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          >
                            👁 View
                          </button>

                          <button
                            onClick={() => handleEdit(a, i)}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          >
                            ✏ Edit
                          </button>

                          <button
                            onClick={() => handleDelete(i)}
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                          >
                            🗑 Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
              className="bg-white rounded-xl shadow border p-4 relative"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">{a.date}</span>
                <span className="text-sm font-medium">{a.time}</span>
              </div>

              <p className="font-semibold text-gray-800">{a.type}</p>

              <div className="absolute top-3 right-3">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setOpenMenuIndex(openMenuIndex === i ? null : i)
                  }
                  className="text-lg text-gray-600"
                >
                  ⋮
                </motion.button>

                <AnimatePresence>
                  {openMenuIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg z-20 w-32"
                    >
                      <button
                        onClick={() => {
                          setSelectedAppointment(a);
                          setOpenMenuIndex(null);
                        }}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        👁 View
                      </button>

                      <button
                        onClick={() => handleEdit(a, i)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        ✏ Edit
                      </button>

                      <button
                        onClick={() => handleDelete(i)}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                      >
                        🗑 Delete
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VIEW MODAL ================= */}
        <AnimatePresence>
          {selectedAppointment && !isEditMode && (
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

                <p><strong>Name:</strong> {selectedAppointment.name}</p>
                <p className="mb-3"><strong>Phone:</strong> {selectedAppointment.phone}</p>

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

        {/* ================= EDIT MODAL ================= */}
        <AnimatePresence>
          {isEditMode && (
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
                className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Edit Appointment
                </h2>

                {Object.keys(editData).map((field) => (
                  <input
                    key={field}
                    value={editData[field]}
                    onChange={(e) =>
                      setEditData({ ...editData, [field]: e.target.value })
                    }
                    placeholder={field}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-3"
                  />
                ))}

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="px-5 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
                  >
                    Save
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
