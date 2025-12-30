import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function LabResults() {
  const [results, setResults] = useState([
    { date: "11/01/25", name: "Wet Mount", status: "Normal", doctor: "Dr. Amy Nelson" },
    { date: "19/03/25", name: "Vaginal PH", status: "Normal", doctor: "Dr. Amy Nelson" },
    { date: "21/06/25", name: "Gonorrhea (urine)", status: "Negative", doctor: "Dr. Amy Nelson" },
    { date: "09/08/25", name: "Chlamydia (urine)", status: "Negative", doctor: "Dr. Amy Nelson" },
    { date: "14/09/25", name: "Pap IG, HPV-hr", status: "Negative", doctor: "Dr. Amy Nelson" },
    { date: "30/11/25", name: "Blood Sugar", status: "Normal", doctor: "Dr. Amy Nelson" },
    { date: "15/12/25", name: "Cholesterol", status: "Abnormal", doctor: "Dr. Amy Nelson" }
  ]);

  const statusColors = {
    Normal: "bg-green-500",
    Negative: "bg-green-500",
    Abnormal: "bg-red-500",
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [newResult, setNewResult] = useState({
    date: "",
    name: "",
    status: "",
    doctor: "",
  });

  const handleAddResult = () => {
    if (!newResult.date || !newResult.name || !newResult.status || !newResult.doctor) return;
    setResults([...results, newResult]);
    setNewResult({ date: "", name: "", status: "", doctor: "" });
    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      {/* PAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8"
      >
        {/* ================= ADD RESULT MODAL ================= */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl border"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl font-semibold mb-6"
                >
                  Add Lab Result
                </motion.h2>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {["date", "name", "status", "doctor"].map((field) => (
                    <motion.div
                      key={field}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label className="text-sm text-gray-600 capitalize">
                        {field === "name" ? "Test Name" : field}
                      </label>

                      {field === "status" ? (
                        <select
                          value={newResult.status}
                          onChange={(e) =>
                            setNewResult({ ...newResult, status: e.target.value })
                          }
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        >
                          <option value="">Select</option>
                          <option value="Normal">Normal</option>
                          <option value="Negative">Negative</option>
                          <option value="Abnormal">Abnormal</option>
                        </select>
                      ) : (
                        <input
                          type={field === "date" ? "date" : "text"}
                          value={newResult[field]}
                          onChange={(e) =>
                            setNewResult({ ...newResult, [field]: e.target.value })
                          }
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex justify-end gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setNewResult({ date: "", name: "", status: "", doctor: "" });
                      setShowAddModal(false);
                    }}
                    className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddResult}
                    className="px-6 py-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-950"
                  >
                    Add Result
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HEADER ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Recent Lab Results
        </motion.h1>

        {/* ================= TABLE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6 border"
        >
          <div className="hidden md:grid grid-cols-4 font-semibold border-b pb-3">
            <span>Date</span>
            <span>Test</span>
            <span>Status</span>
            <span>Doctor</span>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {results.map((r, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.08)",
                }}
                className="grid grid-cols-1 md:grid-cols-4 gap-3 py-4 border-b text-sm"
              >
                <span>{r.date}</span>
                <span className="font-medium">{r.name}</span>

                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className={`w-2 h-2 rounded-full ${statusColors[r.status]}`}
                  ></motion.span>
                  {r.status}
                </span>

                <span>{r.doctor}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= ADD BUTTON ================= */}
        <motion.button
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-5 right-5 sm:right-20 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-12 h-12 flex items-center justify-center shadow-2xl text-xl"
        >
          <i className="bi bi-plus-lg"></i>
        </motion.button>
      </motion.div>
    </Patientdashboard>
  );
}

export default LabResults;
