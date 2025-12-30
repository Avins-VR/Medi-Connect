import React from "react";
import { motion } from "framer-motion";
import Doctordashboard from "./Doctordashboard";

function AddPatient() {
  return (
    <Doctordashboard>
      {/* PAGE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Add Patient
        </h2>
      </motion.div>

      {/* MAIN WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen flex justify-center px-4 sm:px-6 py-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            w-full
            max-w-6xl
            bg-white
            overflow-hidden
            rounded-3xl
            shadow
          "
        >
          <div className="w-full p-6 sm:p-10 lg:p-12 bg-white rounded-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-6"
            >
              {/* ROW 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>
              </motion.div>

              {/* ROW 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Gender
                  </label>
                  <div className="flex flex-wrap gap-6 mt-2">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex items-center gap-2">
                        <input type="radio" name="gender" />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>
              </motion.div>

              {/* ROW 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="Enter age"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full address"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>
              </motion.div>

              {/* ROW 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Blood Group
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none">
                    <option>Select Blood Group</option>
                    <option>A+</option><option>A-</option>
                    <option>B+</option><option>B-</option>
                    <option>O+</option><option>O-</option>
                    <option>AB+</option><option>AB-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-3">
                    Status
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none">
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </motion.div>

              {/* SUBMIT */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex justify-center pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    w-full sm:w-96
                    bg-indigo-600
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-indigo-700
                    transition
                  "
                >
                  Add Patient
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Doctordashboard>
  );
}

export default AddPatient;
