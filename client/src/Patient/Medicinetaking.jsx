import React, { useState, useRef, useEffect } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function Medicinetaking() {

  const hasMountedRef = useRef(false);

  const [medications, setMedications] = useState(() => {
    const savedMeds = localStorage.getItem("medications");
    return savedMeds
      ? JSON.parse(savedMeds)
      : [
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
        ];
  });

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications));
  }, [medications]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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

    if (editIndex !== null) {
      const updatedMeds = [...medications];
      updatedMeds[editIndex] = newMed;
      setMedications(updatedMeds);
      setEditIndex(null);
    } else {
      setMedications([...medications, newMed]);
    }

    setNewMed({
      name: "",
      category: "",
      dosage: "",
      frequency: "",
      time: "",
      instructions: "",
    });

    setShowAddModal(false);
    hasMountedRef.current = true;
  };

  const handleEditMedication = (med, index) => {
    setNewMed(med);
    setEditIndex(index);
    setShowAddModal(true);
  };

  const handleDeleteMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
    hasMountedRef.current = true;
  };

  /* 🔥 ADDED TEXT VARIANTS (ONLY ADDITION) */
  const heading = "Current Medications";

  const letterContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
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
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24"
      >
        {/* HEADER WITH LETTER MOTION */}
        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 mt-[-20px]"
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

        {/* SUBTITLE WORD MOTION */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="text-gray-600 text-center mb-8 sm:mb-10 text-sm sm:text-base"
        >
          {"Manage and track your prescribed medications"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        {/* MEDICATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {medications.map((med, index) => (
            <motion.div
              key={index}
              initial={
                hasMountedRef.current ? false : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border relative"
            >
              <div className="absolute top-4 right-4 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEditMedication(med, index)}
                  className="text-indigo-600"
                >
                  <i className="bi bi-pencil-square"></i>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDeleteMedication(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <i className="bi bi-trash"></i>
                </motion.button>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
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

              {/* STAGGER DETAILS */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
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
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <strong>{label}:</strong> {value}
                  </motion.p>
                ))}

                <motion.hr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-gray-600"
                >
                  <strong>Instructions:</strong> {med.instructions}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FLOATING ADD BUTTON WITH BREATHING EFFECT */}
        <motion.button
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setNewMed({
              name: "",
              category: "",
              dosage: "",
              frequency: "",
              time: "",
              instructions: "",
            });
            setEditIndex(null);
            setShowAddModal(true);
          }}
          className="fixed bottom-5 right-5 sm:right-8 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-2xl text-lg"
        >
          <i className="bi bi-plus-lg"></i>
        </motion.button>
      </motion.div>
    </Patientdashboard>
  );
}

export default Medicinetaking;
