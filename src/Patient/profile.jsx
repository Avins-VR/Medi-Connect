import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";

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
      <div className="w-full max-w-6xl mx-auto p-6">

        {/* ==================== EDIT POPUP ==================== */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl border">

              <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Email</label>
                  <input
                    type="text"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Sex */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Sex</label>
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
                </div>

                {/* Age */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Age</label>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) =>
                      setProfileData({ ...profileData, age: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Blood Group */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Blood Group</label>
                  <input
                    type="text"
                    value={profileData.blood}
                    onChange={(e) =>
                      setProfileData({ ...profileData, blood: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Status</label>
                  <input
                    type="text"
                    value={profileData.status}
                    onChange={(e) =>
                      setProfileData({ ...profileData, status: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Phone Number</label>
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* DOB */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Date of Birth</label>
                  <input
                    type="date"
                    value={profileData.dob}
                    onChange={(e) =>
                      setProfileData({ ...profileData, dob: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Street Address</label>
                  <input
                    type="text"
                    value={profileData.street}
                    onChange={(e) =>
                      setProfileData({ ...profileData, street: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">City</label>
                  <input
                    type="text"
                    value={profileData.city}
                    onChange={(e) =>
                      setProfileData({ ...profileData, city: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-indigo-900 text-white hover:bg-indigo-950 rounded-lg"
                >
                  Save Changes
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ==================== PROFILE VIEW ==================== */}
        <div className="bg-white rounded-2xl shadow-md pl-8 py-10 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center text-center border-r md:border-r-2 border-gray-200 pr-0 md:pr-6">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
                alt="Profile"
                className="w-32 h-32 rounded-full shadow-md"
              />

              <h2 className="text-2xl font-semibold mt-6">{profileData.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{profileData.email}</p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-5 px-4 py-2 text-sm border rounded-lg text-indigo-700 border-indigo-700 hover:bg-indigo-900 hover:text-white transition"
              >
                Edit Profile
              </button>
            </div>

            {/* RIGHT SIDE DETAILS */}
            <div className="md:col-span-2 grid grid-cols-2 gap-y-5 gap-x-8">

              <Info label="Sex" value={profileData.sex} />
              <Info label="Age" value={profileData.age} />
              <Info label="Blood Group" value={profileData.blood} />
              <Info label="Status" value={profileData.status} />
              <Info label="Phone No" value={profileData.phone} />
              <Info label="Date of Birth" value={profileData.dob} />
              <Info label="Street Address" value={profileData.street} />
              <Info label="City" value={profileData.city} />

            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <h2 className="text-2xl font-semibold mt-10 mb-6">Patient Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <Card label="Last Visit" value="12 Oct, 2024" status="Completed" color="text-green-600" />
          <Card label="Upcoming Appointment" value="25 Jan, 2025" status="Scheduled" color="text-blue-600" />
          <Card label="Total Reports" value="18 Reports" status="Available" color="text-purple-600" />
          <Card label="Current Doctor" value="Dr. Ramesh Kumar" status="Assigned" color="text-orange-600" />
        </div>

      </div>
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
