import React, { useState, useEffect } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "health_timeline_events";

function HealthTimeline() {
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : [
          {
            month: "NOV",
            year: "2024",
            type: "HOSPITALIZATION",
            title: "Emergency Room Visit - Chest Pain",
            desc: "Presented with acute chest pain. ECG and cardiac enzymes normal. Diagnosed as musculoskeletal pain.",
            doctor: "Dr. Robert Kim",
            Date: "November 10, 2024",
            significance: "Significant",
          },
          {
            month: "OCT",
            year: "2024",
            type: "DIAGNOSTIC",
            title: "Routine Blood Panel",
            desc: "CBC, lipid profile, and kidney function tests performed. All results were within the normal range.",
            doctor: "Dr. John Patel",
            Date: "October 15, 2024",
            significance: "Normal",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [newEvent, setNewEvent] = useState({
    month: "",
    year: "",
    type: "",
    title: "",
    desc: "",
    doctor: "",
    Date: "",
    significance: "",
  });

  const handleAddEvent = () => {
    if (!newEvent.month || !newEvent.year || !newEvent.type || !newEvent.title)
      return;

    if (isEditMode) {
      const updated = [...events];
      updated[editIndex] = newEvent;
      setEvents(updated);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setEvents([...events, newEvent]);
    }

    setNewEvent({
      month: "",
      year: "",
      type: "",
      title: "",
      desc: "",
      doctor: "",
      Date: "",
      significance: "",
    });

    setShowAddModal(false);
  };

  const handleEditEvent = (event, index) => {
    setNewEvent(event);
    setEditIndex(index);
    setIsEditMode(true);
    setShowAddModal(true);
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const heading = "Health History Timeline";

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
    <Patientdashboard>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 mr-28"
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mb-12"
        >
          Your complete medical journey at a glance
        </motion.p>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block relative">
          <div className="absolute left-[110px] top-0 h-full w-[2px] bg-gray-300"></div>

          <div className="space-y-16">
            {events.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.25 }}
                className="grid grid-cols-[220px,1fr] gap-12 relative"
              >
                {/* DATE */}
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{item.month}</p>
                    <p className="text-gray-500">{item.year}</p>
                  </div>
                  <div className="w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* CARD */}
                <div className="bg-white rounded-2xl shadow-md p-6 border relative">
                  {/* EDIT / DELETE */}
                  <div className="absolute top-4 right-4 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      onClick={() => handleEditEvent(item, index)}
                      className="text-indigo-600"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      onClick={() => handleDeleteEvent(index)}
                      className="text-red-600"
                    >
                      <i className="bi bi-trash"></i>
                    </motion.button>
                  </div>

                  <span className="text-sm font-semibold text-[#215B63]">
                    {item.type}
                  </span>

                  <h2 className="text-xl font-semibold mt-3 text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex gap-6 mt-4 text-gray-500">
                    <span>{item.doctor}</span>
                    <span>{item.Date}</span>
                  </div>

                  <p className="text-sm text-orange-500 mt-4">
                    ● {item.significance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="md:hidden space-y-6">
          {events.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.25 }}
              className="bg-white rounded-2xl shadow-md border p-5 relative"
            >
              {/* EDIT / DELETE */}
              <div className="absolute top-3 right-3 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  onClick={() => handleEditEvent(item, index)}
                  className="text-indigo-600"
                >
                  <i className="bi bi-pencil-square"></i>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  onClick={() => handleDeleteEvent(index)}
                  className="text-red-600"
                >
                  <i className="bi bi-trash"></i>
                </motion.button>
              </div>

              <p className="text-sm font-semibold">
                {item.month} {item.year}
              </p>

              <span className="text-xs font-semibold text-[#215B63]">
                {item.type}
              </span>

              <h2 className="text-lg font-semibold mt-2 text-gray-900">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

              <p className="text-xs text-orange-500 mt-3">
                ● {item.significance}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= ADD BUTTON ================= */}
        <button
          onClick={() => {
            setIsEditMode(false);
            setEditIndex(null);
            setNewEvent({
              month: "",
              year: "",
              type: "",
              title: "",
              desc: "",
              doctor: "",
              Date: "",
              significance: "",
            });
            setShowAddModal(true);
          }}
          className="fixed bottom-5 right-20 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-12 h-12 flex items-center justify-center shadow-2xl text-xl"
        >
          +
        </button>

        {/* ================= ADD / EDIT MODAL ================= */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  {isEditMode ? "Edit Timeline Event" : "Add Timeline Event"}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(newEvent).map((field) => (
                    <input
                      key={field}
                      placeholder={field}
                      value={newEvent[field]}
                      onChange={(e) =>
                        setNewEvent({
                          ...newEvent,
                          [field]: e.target.value,
                        })
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                  ))}
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setIsEditMode(false);
                    }}
                    className="px-6 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddEvent}
                    className="px-6 py-2 bg-indigo-900 text-white rounded-lg"
                  >
                    {isEditMode ? "Update Event" : "Add Event"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Patientdashboard>
  );
}

export default HealthTimeline;
