import React from "react";
import Patientdashboard from "./Patientdashboard";
import { motion } from "framer-motion";

function AppointmentPage() {
  return (
    <Patientdashboard>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      >
        {/* Outer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-full 
            max-w-[1100px] 
            bg-white 
            relative 
            overflow-hidden 
            flex 
            items-center 
            justify-center 
            rounded-3xl 
            shadow-lg
          "
        >
          {/* Inner Form Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="
              w-full 
              max-w-[1100px] 
              p-6 
              sm:p-10 
              lg:p-12 
              bg-white 
              rounded-3xl
            "
          >
            {/* Title */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10"
            >
              Book an Appointment
            </motion.h2>

            {/* Form Fields */}
            <div className="space-y-4">

              {/* Patient + Mobile */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-4 pt-6">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-4 pt-6">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-4 py-3 outline-none"
                  />
                </div>
              </motion.div>

              {/* Date + Time */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-6 pt-6"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-6">
                    Pick a Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-6">
                    Pick a Time
                  </label>
                  <input
                    type="time"
                    className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-4 py-3 outline-none"
                  />
                </div>
              </motion.div>

              {/* Consultation + Doctor */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-6 pt-6"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-6">
                    Consultation Type
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-5 py-4 outline-none">
                    <option value="">Select Type</option>
                    <option value="general">General Consultation</option>
                    <option value="dental">Dental Checkup</option>
                    <option value="eye">Eye Checkup</option>
                    <option value="cardio">Cardiology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-6">
                    Doctor Name
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-5 py-4 outline-none">
                    <option value="">Select Doctor</option>
                    <option value="dr-john">Dr. John Mathew</option>
                    <option value="dr-sophia">Dr. Sophia Daniel</option>
                    <option value="dr-rajesh">Dr. Rajesh Kumar</option>
                    <option value="dr-meera">Dr. Meera Prakash</option>
                  </select>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <label className="block text-gray-900 font-medium mb-6 pt-6">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Enter any additional details..."
                  className="w-full bg-gray-100 rounded-xl shadow text-gray-700 px-5 py-4 outline-none"
                ></textarea>
              </motion.div>

              {/* Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-full 
                    sm:w-96 
                    bg-indigo-600 
                    text-white 
                    py-4 
                    rounded-xl 
                    mt-6 
                    font-semibold 
                    hover:bg-indigo-700
                  "
                >
                  Get Appointment
                </motion.button>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Patientdashboard>
  );
}

export default AppointmentPage;
