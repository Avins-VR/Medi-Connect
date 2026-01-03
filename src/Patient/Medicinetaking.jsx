import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function Medicinetaking() {
  const [medications, setMedications] = useState([
    {
      name: "Metformin",
      category: "Diabetes Management",
      dosage: "500mg",
      frequency: "Twice daily",
      time: "8:00 AM, 8:00 PM",
      instructions: "Take with meals to reduce stomach upset.",
    },
    {
      name: "Lisinopril",
      category: "Blood Pressure",
      dosage: "10mg",
      frequency: "Once daily",
      time: "9:00 AM",
      instructions: "Take at the same time each day.",
    },
    {
      name: "Atorvastatin",
      category: "Cholesterol",
      dosage: "20mg",
      frequency: "Once daily",
      time: "10:00 PM",
      instructions: "Take in the evening for best results.",
    },
    {
      name: "Omeprazole",
      category: "Acid Reflux",
      dosage: "40mg",
      frequency: "Once daily",
      time: "7:30 AM",
      instructions: "Take 30 minutes before breakfast.",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [newMed, setNewMed] = useState({
    name: "",
    category: "",
    dosage: "",
    frequency: "",
    time: "",
    instructions: "",
  });

  const handleAddMedication = () => {
    if (!newMed.name) return;

    setMedications([...medications, newMed]);
    setNewMed({
      name: "",
      category: "",
      dosage: "",
      frequency: "",
      time: "",
      instructions: "",
    });
    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      {/* PAGE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24"
      >
        {/* ================= ADD MODAL ================= */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="bg-white w-full max-w-2xl p-6 sm:p-8 rounded-xl shadow-xl max-h-[85vh] overflow-y-auto"
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                  Add Medication
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {Object.keys(newMed).map((field) => (
                    <div key={field} className="flex flex-col">
                      <label className="text-gray-600 text-sm mb-1 capitalize">
                        {field}
                      </label>
                      <input
                        type="text"
                        value={newMed[field]}
                        onChange={(e) =>
                          setNewMed({ ...newMed, [field]: e.target.value })
                        }
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 sm:gap-4 mt-8">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-sm"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleAddMedication}
                    className="px-5 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-950 text-sm"
                  >
                    Add
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Current Medications
        </h1>

        <p className="text-gray-600 text-center mb-8 sm:mb-10 text-sm sm:text-base">
          Manage and track your prescribed medications
        </p>

        {/* MEDICATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {medications.map((med, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border"
            >
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                  className="bg-blue-100 text-indigo-600 px-3 py-2 rounded-full"
                >
                  <i className="bi bi-capsule text-lg sm:text-xl"></i>
                </motion.div>

                <div>
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-lg sm:text-xl font-semibold"
                  >
                    {med.name}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    className="text-gray-500 text-xs sm:text-sm"
                  >
                    {med.category}
                  </motion.p>
                </div>
              </div>

              {/* DETAILS */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-3 text-gray-700 text-sm sm:text-base"
              >
                {[
                  ["Dosage", med.dosage],
                  ["Frequency", med.frequency],
                  ["Time", med.time],
                ].map(([label, value], i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <strong>{label}:</strong> {value}
                  </motion.p>
                ))}

                <motion.hr
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                />

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-sm text-gray-600"
                >
                  <strong>Instructions:</strong> {med.instructions}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FLOATING ADD BUTTON */}
        <button
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-5 right-5 sm:right-8 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-2xl text-lg"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </motion.div>
    </Patientdashboard>
  );
}

export default Medicinetaking;
