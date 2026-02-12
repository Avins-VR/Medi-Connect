import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion } from "framer-motion";

function AppointmentPage() {
  // 🔹 STATES
  const [patientName, setPatientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [doctor, setDoctor] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // 🔹 BOOK APPOINTMENT FUNCTION
  const handleBookAppointment = async () => {
    setError("");
    setSuccess("");

    if (!patientName || !mobile || !date || !time) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/appointments/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            patientName,
            mobile,
            date,
            time,
            consultationType,
            doctorName: doctor,
            message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Booking failed");
        return;
      }

      setSuccess("Appointment booked successfully!");

      // 🔹 CLEAR FORM
      setPatientName("");
      setMobile("");
      setDate("");
      setTime("");
      setConsultationType("");
      setDoctor("");
      setMessage("");
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

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
          className="w-full max-w-[1100px] bg-white rounded-3xl shadow-lg"
        >
          {/* Inner Form */}
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
            className="p-6 sm:p-10 lg:p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10"
            >
              Book an Appointment
            </motion.h2>

            <div className="space-y-6">
              {/* Patient + Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 outline-none"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="+91XXXXXXXXXX"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 outline-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Pick a Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 outline-none"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Pick a Time
                  </label>
                  <input
                    type="time"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 outline-none"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Consultation + Doctor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Consultation Type
                  </label>
                  <select
                    className="w-full bg-gray-100 rounded-xl shadow px-5 py-4 outline-none"
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="general">General Consultation</option>
                    <option value="dental">Dental Checkup</option>
                    <option value="eye">Eye Checkup</option>
                    <option value="cardio">Cardiology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Doctor Name
                  </label>
                  <select
                    className="w-full bg-gray-100 rounded-xl shadow px-5 py-4 outline-none"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. John Mathew">Dr. John Mathew</option>
                    <option value="Dr. Sophia Daniel">Dr. Sophia Daniel</option>
                    <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar</option>
                    <option value="Dr. Meera Prakash">Dr. Meera Prakash</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-medium mb-4">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Enter any additional details..."
                  className="w-full bg-gray-100 rounded-xl shadow px-5 py-4 outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Status */}
              {error && (
                <p className="text-red-600 text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-600 text-center">{success}</p>
              )}

              {/* Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-96 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700"
                  onClick={handleBookAppointment}
                >
                  Get Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Patientdashboard>
  );
}

export default AppointmentPage;
