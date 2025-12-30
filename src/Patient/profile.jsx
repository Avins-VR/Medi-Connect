import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Mrs. Maria Waston",
    email: "mariawaston2022@gmail.com",
    sex: "Female",
    age: "28",
    blood: "A+",
    status: "Active",
    phone: "123-456-7890",
    dob: "2001-01-20",
    street: "Kamarajar Salai",
    city: "Chennai",
  });

  return (
    <Patientdashboard>
      {/* PAGE ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto p-6"
      >

        {/* ==================== EDIT POPUP ==================== */}
        <AnimatePresence>
          {isEditing && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4 }}
                className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl border"
              >
                <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

                {/* FORM STAGGER */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {[
                    ["Full Name", "name"],
                    ["Email", "email"],
                    ["Sex", "sex"],
                    ["Age", "age"],
                    ["Blood Group", "blood"],
                    ["Status", "status"],
                    ["Phone Number", "phone"],
                    ["Date of Birth", "dob"],
                    ["Street Address", "street"],
                    ["City", "city"],
                  ].map(([label, key]) => (
                    <motion.div
                      key={key}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label className="text-gray-600 text-sm mb-1 block">{label}</label>

                      {key === "sex" ? (
                        <select
                          value={profileData.sex}
                          onChange={(e) =>
                            setProfileData({ ...profileData, sex: e.target.value })
                          }
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        >
                          <option>Female</option>
                          <option>Male</option>
                          <option>Other</option>
                        </select>
                      ) : (
                        <input
                          type={key === "dob" ? "date" : key === "age" ? "number" : "text"}
                          value={profileData[key]}
                          onChange={(e) =>
                            setProfileData({ ...profileData, [key]: e.target.value })
                          }
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* BUTTONS */}
                <div className="flex justify-end gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-indigo-900 text-white hover:bg-indigo-950 rounded-lg"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================== PROFILE CARD ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md pl-8 py-10 border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* LEFT SIDE (Profile Pic & Name) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center border-r md:border-r-2 border-gray-200 pr-0 md:pr-6"
            >
              <motion.img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
                alt="Profile"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="w-32 h-32 rounded-full shadow-md"
              />

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-semibold mt-6"
              >
                {profileData.name}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-sm mt-2"
              >
                {profileData.email}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="mt-5 px-4 py-2 text-sm border rounded-lg text-indigo-700 border-indigo-700 hover:bg-indigo-900 hover:text-white transition"
              >
                Edit Profile
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE DETAILS - STAGGERED INFO */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="md:col-span-2 grid grid-cols-2 gap-y-5 gap-x-8"
            >
              {Object.entries({
                Sex: profileData.sex,
                Age: profileData.age,
                "Blood Group": profileData.blood,
                Status: profileData.status,
                "Phone No": profileData.phone,
                "Date of Birth": profileData.dob,
                "Street Address": profileData.street,
                City: profileData.city,
              }).map(([label, value]) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Info label={label} value={value} />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

        {/* ==================== OVERVIEW CARDS ==================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-6">Patient Overview</h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {[
            ["Last Visit", "12 Oct, 2024", "Completed", "text-green-600"],
            ["Upcoming Appointment", "25 Jan, 2025", "Scheduled", "text-blue-600"],
            ["Total Reports", "18 Reports", "Available", "text-purple-600"],
            ["Current Doctor", "Dr. Ramesh Kumar", "Assigned", "text-orange-600"],
          ].map(([label, value, status, color], index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.94 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Card label={label} value={value} status={status} color={color} />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </Patientdashboard>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-sm mb-1">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

const Card = ({ label, value, status, color }) => (
  <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
    <p className="text-gray-500 text-sm">{label}</p>
    <h3 className="text-xl font-semibold text-gray-800 mt-3">{value}</h3>
    <p className={`${color} text-sm mt-2`}>{status}</p>
  </div>
);

export default Profile;
