import React from "react";
import Patientdashboard from "./Patientdashboard";
import { motion } from "framer-motion";

export default function UpcomingAppointment() {
  return (
    <Patientdashboard>
      {/* Page Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-4 sm:p-6 flex justify-center"
      >
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-full
            max-w-6xl
            bg-white
            shadow-lg
            rounded-2xl
            p-4 sm:p-6 lg:p-8
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8 lg:gap-16
            min-h-[auto]
            md:min-h-[520px]
            lg:min-h-[550px]
          "
        >

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Appointment Date
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-indigo-50 p-4 sm:p-5 rounded-xl shadow-md"
            >
              <div className="text-center mb-4 text-base sm:text-lg font-medium text-indigo-700">
                November 2025
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm"
              >
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <motion.div
                    key={d}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="font-semibold text-gray-600"
                  >
                    {d}
                  </motion.div>
                ))}

                {[...Array(3)].map((_, i) => (
                  <div key={i}></div>
                ))}

                {[...Array(30)].map((_, i) => {
                  const date = i + 1;
                  const isBooked = date === 18;

                  return (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={!isBooked ? { scale: 1.1 } : {}}
                      className={`py-1.5 sm:py-2 rounded-lg transition ${
                        isBooked
                          ? "bg-indigo-600 text-white font-semibold shadow-md"
                          : "text-gray-700 hover:bg-gray-200 cursor-pointer"
                      }`}
                    >
                      {date}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-full
                mt-6 sm:mt-10
                bg-indigo-600
                text-white
                py-2.5 sm:py-3
                rounded-xl
                shadow
                hover:bg-indigo-700
                transition
                text-sm sm:text-base
              "
            >
              Cancel Appointment
            </motion.button>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Time
              </h3>
              <div className="mt-3 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-xl shadow text-gray-700 text-sm sm:text-base">
                04:30 PM
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Consultation Type
                </h3>
                <div className="mt-3 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-xl shadow text-gray-700 text-sm sm:text-base">
                  General Consultation
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Doctor Name
                </h3>
                <div className="mt-3 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-xl shadow text-gray-700 text-sm sm:text-base">
                  Dr. Sarah Mitchell
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Message
              </h3>
              <div className="mt-3 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-xl shadow text-gray-700 text-sm sm:text-base leading-relaxed">
                I have been experiencing mild headaches for the past few days.
                Please check and provide guidance.
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </Patientdashboard>
  );
}
