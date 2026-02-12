import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Doctordashboard from "./Doctordashboard";

const pageVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function MedicalSchedulePlanner() {
  const statusStyles = {
    Confirmed: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Completed: "bg-gray-200 text-gray-700",
  };

  const loadAppointments = () => {
    const saved = localStorage.getItem("doctor-appointments");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "Sarah Johnson", type: "Checkup", time: "09:00", status: "Confirmed" },
          { name: "Michael Chen", type: "Consultation", time: "10:30", status: "Pending" },
          { name: "Emily Davis", type: "Follow-up", time: "11:00", status: "Confirmed" },
          { name: "James Wilson", type: "Checkup", time: "14:00", status: "Completed" },
          { name: "Lisa Anderson", type: "Health Review", time: "15:30", status: "Confirmed" },
        ];
  };

  const [appointments, setAppointments] = useState(loadAppointments);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    time: "",
    status: "",
  });

  useEffect(() => {
    localStorage.setItem("doctor-appointments", JSON.stringify(appointments));
  }, [appointments]);

  const updateField = (field, value) =>
    setFormData({ ...formData, [field]: value });

  const openAddModal = () => {
    setEditingIndex(null);
    setFormData({ name: "", type: "", time: "", status: "" });
    setShowModal(true);
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setFormData(appointments[index]);
    setShowModal(true);
  };

  const saveSchedule = () => {
    if (!formData.name || !formData.type || !formData.time || !formData.status)
      return;

    if (editingIndex !== null) {
      const updated = [...appointments];
      updated[editingIndex] = formData;
      setAppointments(updated);
    } else {
      setAppointments([...appointments, formData]);
    }
    setShowModal(false);
  };

  const deleteSchedule = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (dateObj) =>
    dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  const goPrevDay = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 1);
    setCurrentDate(d);
  };

  const goNextDay = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 1);
    setCurrentDate(d);
  };
  const heading = "Schedule";

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
        variants={pageVariant}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6"
      >
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <motion.h1
                            variants={letterContainer}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl sm:text-3xl font-bold text-gray-900"
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
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-indigo-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800"
            onClick={openAddModal}
          >
            <i className="bi bi-plus-lg"></i> Add
          </motion.button>
        </div>

        {/* DATE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-6 mb-10"
        >
          <motion.button whileTap={{ scale: 0.9 }} onClick={goPrevDay}>
            <i className="bi bi-chevron-left text-xl text-gray-500"></i>
          </motion.button>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {formatDate(currentDate)}
          </h2>

          <motion.button whileTap={{ scale: 0.9 }} onClick={goNextDay}>
            <i className="bi bi-chevron-right text-xl text-gray-500"></i>
          </motion.button>
        </motion.div>

        {/* LIST */}
        <motion.div className="space-y-6">
          {appointments.map((a, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{
                y: -3,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.08)",
              }}
              className="bg-white border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 6 }}
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center"
                >
                  <i className="bi bi-person text-indigo-500 text-2xl"></i>
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">{a.name}</p>
                  <p className="text-gray-500 text-sm">{a.type}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between sm:justify-end">
                <span className="flex items-center gap-2 text-gray-500">
                  <i className="bi bi-clock"></i>
                  {a.time}
                </span>

                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[a.status]}`}
                >
                  {a.status}
                </motion.span>

                <div className="relative group">
                  <i className="bi bi-three-dots-vertical text-xl cursor-pointer"></i>
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden group-hover:flex flex-col absolute right-0 top-6 bg-white shadow-lg border rounded-lg w-28 z-30"
                  >
                    <button onClick={() => openEditModal(index)} className="px-4 py-2 text-left hover:bg-gray-100">
                      Edit
                    </button>
                    <button onClick={() => deleteSchedule(index)} className="px-4 py-2 text-left text-red-600 hover:bg-gray-100">
                      Delete
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl relative"
            >
              <button className="absolute top-3 right-3 text-xl" onClick={() => setShowModal(false)}>✖</button>

              <h2 className="text-2xl font-semibold mb-6">
                {editingIndex !== null ? "Edit Schedule" : "Add New Schedule"}
              </h2>

              <div className="space-y-4">
                {["name", "type", "time"].map((f) => (
                  <motion.input
                    key={f}
                    whileFocus={{ scale: 1.02 }}
                    type={f === "time" ? "time" : "text"}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3"
                    value={formData[f]}
                    onChange={(e) => updateField(f, e.target.value)}
                  />
                ))}

                <select
                  className="w-full bg-gray-100 rounded-xl px-4 py-3"
                  value={formData.status}
                  onChange={(e) => updateField("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                </select>

                <div className="flex justify-end gap-4 pt-4">
                  <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-gray-300 rounded-lg">
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.92 }}
                    className="px-5 py-2 bg-indigo-700 text-white rounded-lg"
                    onClick={saveSchedule}
                  >
                    Save
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Doctordashboard>
  );
}

export default MedicalSchedulePlanner;
