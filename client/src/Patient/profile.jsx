import React, { useState, useEffect } from "react";
import Patientdashboard from "./Patientdashboard";
import { motion, AnimatePresence } from "framer-motion";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [upcomingAppointment, setUpcomingAppointment] = useState(null);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    sex: "Female",
    age: "28",
    blood: "A+",
    status: "Active",
    phone: "123-456-7890",
    dob: "2001-01-20",
    street: "Kamarajar Salai",
    city: "Chennai",
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfileAndAppointment = async () => {
      const res = await fetch("https://medi-connect-rncy.onrender.com/api/profile/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      setProfileData((prev) => ({
        ...prev,
        name: data.user.name,
        email: data.user.email,
        sex: data.user.sex || prev.sex,
        age: data.user.age || prev.age,
        blood: data.user.blood || prev.blood,
        status: data.user.status || prev.status,
        phone: data.user.phone || prev.phone,
        dob: data.user.dob || prev.dob,
        street: data.user.street || prev.street,
        city: data.user.city || prev.city,
      }));

      setUpcomingAppointment(data.upcomingAppointment);
    };

    fetchProfileAndAppointment();
  }, []);

  /* ================= SAVE PROFILE ================= */
  const handleSaveProfile = async () => {
    try {
      const res = await fetch("https://medi-connect-rncy.onrender.com/api/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profileData),
      });

      const updatedUser = await res.json();

      setProfileData((prev) => ({
        ...prev,
        name: updatedUser.name,
        email: updatedUser.email,
      }));

      setIsEditing(false);
    } catch (error) {
      console.error("Profile update failed");
    }
  };

  return (
    <Patientdashboard>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto p-6"
      >

        {/* ================= EDIT MODAL ================= */}
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

                <div className="flex justify-end gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSaveProfile}
                    className="px-6 py-2 bg-indigo-900 text-white rounded-lg"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= PROFILE CARD ================= */}
        <motion.div className="bg-white rounded-2xl shadow-md pl-8 py-10 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            <div className="flex flex-col items-center text-center border-r pr-6">
              <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
                <i className="bi bi-person-fill text-indigo-800 text-6xl"></i>
              </div>

              <h2 className="text-2xl font-semibold mt-6">{profileData.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{profileData.email}</p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-5 px-4 py-2 border rounded-lg text-indigo-700 border-indigo-700"
              >
                Edit Profile
              </button>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-y-5 gap-x-8">
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
                <Info key={label} label={label} value={value} />
              ))}
            </div>

          </div>
        </motion.div>

        {/* ================= OVERVIEW ================= */}
        <h2 className="text-2xl font-semibold mt-10 mb-6">Patient Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <Card label="Last Visit" value="12 Oct, 2024" status="Completed" color="text-green-600" />
          <Card
            label="Upcoming Appointment"
            value={
              upcomingAppointment
                ? `${upcomingAppointment.date} | ${upcomingAppointment.time}`
                : "No Appointment"
            }
            status={upcomingAppointment ? "Scheduled" : "None"}
            color="text-blue-600"
          />
          <Card label="Total Reports" value="18 Reports" status="Available" color="text-purple-600" />
          <Card label="Current Doctor" value="Dr. Ramesh Kumar" status="Assigned" color="text-orange-600" />
        </div>

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
  <div className="bg-white shadow-md rounded-xl p-6 border">
    <p className="text-gray-500 text-sm">{label}</p>
    <h3 className="text-xl font-semibold mt-3">{value}</h3>
    <p className={`${color} text-sm mt-2`}>{status}</p>
  </div>
);

export default Profile;
