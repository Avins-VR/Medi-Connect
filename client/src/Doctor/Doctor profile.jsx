import React, { useState, useEffect } from "react";
import Doctordashboard from "./Doctordashboard";
import { motion, AnimatePresence } from "framer-motion";

/* ================= STORAGE KEY ================= */
const STORAGE_KEY = "doctor_profile_data";

/* ================= MOTION VARIANTS ================= */

const pageVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalCard = {
  hidden: { scale: 0.88, opacity: 0, y: 30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
  exit: { scale: 0.9, opacity: 0 },
};

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  /* ================= LOAD FROM STORAGE ================= */
  const [profileData, setProfileData] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : {
          name: "Dr. Aljin John",
          email: "aljinjohn2016@gmail.com",
          sex: "Male",
          age: "32",
          degree: "MBBS",
          speciality: "Cardiology",
          phone: "123-456-7890",
          hospital: "ABC Hospital",
          address: "Anna Nagar",
          city: "Chennai",
        };
  });

  /* ================= SAVE TO STORAGE ================= */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
  }, [profileData]);

  return (
    <Doctordashboard>
      {/* ================= EDIT MODAL ================= */}
      <AnimatePresence>
        {isEditing && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <motion.div
              variants={modalCard}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full max-w-2xl p-6 sm:p-8 rounded-xl shadow-xl border"
            >
              <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[65vh] overflow-y-auto pr-1"
              >
                {Object.keys(profileData).map((key) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    className="flex flex-col"
                  >
                    <label className="text-gray-600 text-sm mb-2 capitalize">
                      {key}
                    </label>
                    <input
                      type="text"
                      value={profileData[key]}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          [key]: e.target.value,
                        })
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-600"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex justify-end gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-900"
                >
                  Save Changes
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PROFILE PAGE ================= */}
      <motion.div
        variants={pageVariant}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6"
      >
        {/* PROFILE CARD */}
        <motion.div
          whileHover={{
            boxShadow: "0px 18px 35px rgba(0,0,0,0.08)",
            y: -2,
          }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
            {/* LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center md:border-r md:pr-6"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="w-32 h-32 rounded-full shadow-md bg-indigo-100 flex items-center justify-center"
              >
                <i className="bi bi-person-fill text-indigo-800 text-6xl"></i>
              </motion.div>
              

              <motion.h2 variants={fadeUp} className="text-2xl font-semibold mt-6">
                {profileData.name}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 text-sm mt-2"
              >
                {profileData.email}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="mt-5 px-4 py-2 text-sm border rounded-lg text-indigo-700 border-indigo-700 hover:bg-indigo-900 hover:text-white transition"
              >
                Edit Profile
              </motion.button>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8"
            >
              {Object.keys(profileData).map((key) => (
                <motion.div key={key} variants={fadeUp}>
                  <p className="text-gray-500 text-sm mb-1 capitalize">
                    {key}
                  </p>
                  <p className="font-semibold text-gray-800">
                    {profileData[key]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ================= OVERVIEW ================= */}
        <h2 className="text-2xl font-semibold mt-10 mb-6">
          Doctor Overview
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Experience", value: "5+ Years" },
            { label: "BMDC Number", value: "84220" },
            { label: "Joined Doctime", value: "15 Mar, 2020" },
            { label: "Total Rating", value: "⭐ 5.00" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.25 }}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-3">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Doctordashboard>
  );
}

export default Profile;
