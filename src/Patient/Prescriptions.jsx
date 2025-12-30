import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function Prescriptions() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      title: "Prescription 1",
      doctor: "Dr. Rajan",
      date: "12 Nov 2025",
      image:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11042-020-10151-w/MediaObjects/11042_2020_10151_Fig12_HTML.png",
    },
    {
      id: 2,
      title: "Prescription 2",
      doctor: "Dr. Meena",
      date: "05 Oct 2025",
      image:
        "https://i.pinimg.com/736x/ce/2c/a0/ce2ca0f38002e2f6e4392e8173cd2551.jpg",
    },
    {
      id: 3,
      title: "Prescription 3",
      doctor: "Dr. Karthik",
      date: "22 Sep 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuox6Vp7oSphH9_d1LkaRAwRxa3u4iKID1A&s",
    },
  ]);

  const [newPrescription, setNewPrescription] = useState({
    title: "",
    doctor: "",
    date: "",
    image: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    setNewPrescription({ ...newPrescription, image: url });
  };

  const handleAddPrescription = () => {
    setPrescriptions([
      ...prescriptions,
      { id: prescriptions.length + 1, ...newPrescription },
    ]);
    setNewPrescription({ title: "", doctor: "", date: "", image: "" });
    setPreviewImage(null);
    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* ================= ADD PRESCRIPTION MODAL ================= */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-xl shadow-xl border"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl font-semibold mb-6"
                >
                  Add Prescription
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["title", "doctor", "date"].map((field) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-col"
                    >
                      <label className="text-gray-600 text-sm mb-2 capitalize">
                        {field}
                      </label>
                      <input
                        type="text"
                        value={newPrescription[field]}
                        onChange={(e) =>
                          setNewPrescription({
                            ...newPrescription,
                            [field]: e.target.value,
                          })
                        }
                        className="border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col"
                  >
                    <label className="text-gray-600 text-sm mb-2">
                      Prescription Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {previewImage && (
                      <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src={previewImage}
                        className="w-full h-32 object-contain mt-3 rounded-lg border"
                        alt="preview"
                      />
                    )}
                  </motion.div>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddModal(false)}
                    className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddPrescription}
                    className="px-6 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-950"
                  >
                    Add Prescription
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HEADER ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-5"
        >
          Recent Prescriptions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-center mb-10 text-sm sm:text-base"
        >
          View and manage your prescription history
        </motion.p>

        {/* ================= PRESCRIPTION CARDS ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 justify-items-center"
        >
          {prescriptions.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 14px 30px rgba(0,0,0,0.10)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-gray-200 w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 ml-7"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {p.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mt-4">
                  <strong>Doctor:</strong> {p.doctor}
                </p>

                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  <strong>Date:</strong> {p.date}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.25 }}
                className="relative w-full mr-10 sm:w-40 h-48 sm:h-36 shrink-0"
              >
                <img
                  src={p.image}
                  alt="Prescription"
                  className="w-full h-full object-cover rounded-lg border"
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  onClick={() => setSelectedImage(p.image)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl rounded-lg transition"
                >
                  👁
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= IMAGE PREVIEW MODAL ================= */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-[#1e1e1e] p-6 sm:p-10 rounded-2xl shadow-xl w-[95%] sm:w-[90%] max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ✕
        </motion.button>

        {/* IMAGE */}
        <img
          src={selectedImage}
          className="w-full max-h-[65vh] sm:max-h-[500px] object-contain rounded-xl"
          alt="preview"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


        {/* ================= ADD BUTTON ================= */}
        <motion.button
          onClick={() => setShowAddModal(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="fixed bottom-5 right-5 sm:right-20 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-12 h-12 flex items-center justify-center shadow-2xl text-xl"
        >
          +
        </motion.button>
      </motion.div>
    </Patientdashboard>
  );
}

export default Prescriptions;
