import React from "react";
import Patientdashboard from "./Patientdashboard";
import { motion } from "framer-motion";

export default function EmergencyContact() {
  return (
    <Patientdashboard>
      {/* PAGE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center px-4 mt-[-40px] sm:px-8 py-10 min-h-screen"
      >
        {/* WRAPPER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
          }}
          className="
            flex
            flex-col
            xl:flex-row
            gap-10
            xl:gap-32
            w-full
            max-w-6xl
            justify-center
            items-center
          "
        >
          {/* LEFT CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              w-full
              max-w-[400px]
              bg-white
              overflow-hidden
              flex
              items-center
              justify-center
              rounded-3xl
              shadow-lg
              cursor-default
            "
          >
            <div className="w-full h-auto sm:h-[570px] bg-white/30 backdrop-blur-4xl rounded-3xl p-8 text-center">

              <motion.h2
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
              >
                Emergency Call
              </motion.h2>

              <motion.img
                src="./src/assets/Emergency call.png"
                alt="Emergency Phone"
                className="w-64 sm:w-80 h-auto mx-auto mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />

              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Emergency care is always within reach.
                Contact us for quick medical guidance and support.
              </p>

              <motion.a
                href="tel:+91 9488715046"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition block"
              >
                Start
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              w-full
              max-w-[400px]
              bg-white
              overflow-hidden
              flex
              items-center
              justify-center
              rounded-3xl
              shadow-lg
              cursor-default
            "
          >
            <div className="w-full h-auto sm:h-[570px] backdrop-blur-4xl rounded-3xl p-8">

              <motion.h2
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center"
              >
                Choose Service
              </motion.h2>

              <p className="text-gray-600 text-center text-[16px] leading-relaxed mb-8">
                Choose the service you need and get quick medical assistance.
              </p>

              {/* SERVICES GRID */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8">

                {/* Ambulance */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#E8ECFF] rounded-2xl p-5 text-center shadow-md cursor-pointer"
                >
                  <img
                    src="./src/assets/Ambulance.png"
                    className="w-14 sm:w-16 mx-auto mb-3"
                    alt="Ambulance"
                  />
                  <a href="tel:108" className="text-gray-700 text-[16px] sm:text-[18px] font-medium">
                    Ambulance
                  </a>
                </motion.div>

                {/* First Aid */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#E8ECFF] rounded-2xl p-5 text-center shadow-md cursor-pointer"
                >
                  <img
                    src="./src/assets/firstaid.png"
                    className="w-14 sm:w-16 mx-auto mb-3"
                    alt="First Aid"
                  />
                  <a
                    href="https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps"
                    className="text-gray-700 text-[16px] sm:text-[18px] font-medium"
                  >
                    First Aid
                  </a>
                </motion.div>

                {/* Hospital */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.06 }}
                  className="
                    bg-[#E8ECFF]
                    rounded-2xl
                    p-5
                    text-center
                    shadow-md
                    col-span-2
                    w-[160px]
                    mx-auto
                    cursor-pointer
                  "
                >
                  <img
                    src="./src/assets/location.png"
                    className="w-14 sm:w-16 mx-auto mb-3"
                    alt="Hospital"
                  />
                  <a
                    href="https://www.google.com/maps/place/Magna+Hospital/"
                    className="text-gray-700 text-[16px] sm:text-[18px] font-medium"
                  >
                    Hospital
                  </a>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Patientdashboard>
  );
}
