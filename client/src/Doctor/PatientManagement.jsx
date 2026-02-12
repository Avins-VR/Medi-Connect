import React, { useState } from "react";
import { motion } from "framer-motion";
import Doctordashboard from "./Doctordashboard";

function PatientManagement() {
  const stats = [
    { label: "Total Patients", count: 100, text: "text-indigo-700", icon: "bi-people" },
    { label: "Active Cases", count: 80, text: "text-blue-700", icon: "bi-heart-pulse" },
    { label: "Stable", count: 50, text: "text-green-700", icon: "bi-shield-check" },
    { label: "Critical", count: 10, text: "text-red-700", icon: "bi-exclamation-octagon" },
  ];

  const initialPatients = [
    { name: "Willy Ben Chen", age: 27, dob: "10-02-1998", gender: "Male", diagnosis: "Diabetes", last_appointment: "10-04-2025", status: "Stable", img: "https://i.pravatar.cc/80?img=1" },
    { name: "Emily Watford", age: 37, dob: "20-01-1988", gender: "Female", diagnosis: "Hypertension", last_appointment: "09-04-2025", status: "Critical", img: "https://i.pravatar.cc/80?img=2" },
    { name: "Nicholas Robertson", age: 25, dob: "24-06-1999", gender: "Male", diagnosis: "Anxiety Disorder", last_appointment: "08-04-2025", status: "Stable", img: "https://i.pravatar.cc/80?img=3" },
    { name: "Sophia Martinez", age: 30, dob: "15-03-1994", gender: "Female", diagnosis: "Asthma", last_appointment: "07-04-2025", status: "Mild", img: "https://i.pravatar.cc/80?img=4" },
    { name: "Liam Johnson", age: 45, dob: "05-11-1978", gender: "Male", diagnosis: "Arthritis", last_appointment: "06-04-2025", status: "Stable", img: "https://i.pravatar.cc/80?img=5" },
  ];

  const [patients] = useState(initialPatients);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const statusStyle = {
    Stable: "bg-green-100 text-green-600",
    Mild: "bg-yellow-100 text-yellow-600",
    Critical: "bg-red-100 text-red-600",
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterStatus === "All" || p.status === filterStatus)
  );
   const heading = "Patient Management";

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
      {/* PAGE ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 15 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6"
      >
        {/* TITLE */}
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

        {/* STATS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white p-4 rounded-xl shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <i className={`bi ${s.icon} text-2xl ${s.text}`}></i>
                <div>
                  <p className={`text-xl font-bold ${s.text}`}>{s.count}</p>
                  <p className="text-gray-600 text-sm">{s.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Search patient..."
            className="w-full bg-white px-4 py-3 border rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <motion.select
            whileHover={{ scale: 1.02 }}
            className="w-full sm:w-48 bg-white px-4 py-3 border rounded-lg"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Stable">Stable</option>
            <option value="Mild">Mild</option>
            <option value="Critical">Critical</option>
          </motion.select>
        </div>

        {/* MOBILE / TABLET CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {filteredPatients.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
              className="bg-white p-4 rounded-xl shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <img src={p.img} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.dob}</p>
                </div>
              </div>

              <div className="text-sm space-y-1">
                <p><b>Age:</b> {p.age}</p>
                <p><b>Gender:</b> {p.gender}</p>
                <p><b>Diagnosis:</b> {p.diagnosis}</p>
                <p><b>Last Visit:</b> {p.last_appointment}</p>
              </div>

              <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs ${statusStyle[p.status]}`}>
                {p.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block bg-white shadow rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Last Appointment</th>
                <th className="p-4">Age</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Diagnosis</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((p, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ backgroundColor: "#f5f7ff" }}
                  className="border-t"
                >
                  <td className="p-4 flex items-center gap-3">
                    <img src={p.img} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.dob}</p>
                    </div>
                  </td>
                  <td className="p-4">{p.last_appointment}</td>
                  <td className="p-4">{p.age}</td>
                  <td className="p-4">{p.gender}</td>
                  <td className="p-4">{p.diagnosis}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${statusStyle[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </motion.div>
    </Doctordashboard>
  );
}

export default PatientManagement;
