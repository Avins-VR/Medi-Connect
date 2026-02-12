import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";
import Doctordashboard from "./Doctordashboard";

function ConsultationOverview() {
  const data = [
    { day: "Mon", consultations: 85, appointments: 50 },
    { day: "Tue", consultations: 40, appointments: 45 },
    { day: "Wed", consultations: 55, appointments: 30 },
    { day: "Thu", consultations: 95, appointments: 48 },
    { day: "Fri", consultations: 40, appointments: 12 },
    { day: "Sat", consultations: 88, appointments: 33 },
    { day: "Sun", consultations: 47, appointments: 70 },
  ];
const heading = "Consultation Overview";

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
    <Doctordashboard>
      {/* PAGE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      >
        <motion.h1
                          variants={letterContainer}
                          initial="hidden"
                          animate="visible"
                          className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-8 mt-[-20px]"
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

        {/* CHART CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8"
        >
          {/* HEADER BAR */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="
              flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-4 mb-6 sm:mb-10
            "
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Weekly Consultation Statistics
            </h2>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
                Medical Consultations
              </span>

              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-300"></span>
                Appointments
              </span>
            </div>
          </motion.div>

          {/* CHART */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="
              w-full
              h-[260px]
              sm:h-[320px]
              md:h-[380px]
              lg:h-[400px]
            "
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
                <XAxis dataKey="day" tick={{ fill: "#555" }} />
                <YAxis tick={{ fill: "#555" }} />
                <Tooltip />
                <Legend />

                <Bar
                  dataKey="consultations"
                  fill="#059669"
                  radius={[6, 6, 0, 0]}
                  className="transition-all duration-300 hover:opacity-80"
                />

                <Bar
                  dataKey="appointments"
                  fill="#6ee7b7"
                  radius={[6, 6, 0, 0]}
                  className="transition-all duration-300 hover:opacity-80"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </Doctordashboard>
  );
}

export default ConsultationOverview;
