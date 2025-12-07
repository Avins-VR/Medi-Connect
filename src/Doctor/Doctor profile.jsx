import React, { useState } from "react";
import Doctordashboard from "./Doctordashboard";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Dr. Aljin John",
    email: "aljinjohn2016@gmail.com",
    sex: "Male",
    age: "32",
    degree: "MBBS",
    speciality: "Cardiology",
    phone: "123-456-7890",
    hospital: "ABC Hospital",
    address: "Anna Nagar",
    city: "Chennai",
  });

  return (
    <Doctordashboard>

      {/* ================= EDIT PROFILE POPUP MODAL ================= */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl border">
            <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[62vh] overflow-y-auto pr-2">

              {Object.keys(profileData).map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>

                  <input
                    type="text"
                    value={profileData[key]}
                    onChange={(e) =>
                      setProfileData({ ...profileData, [key]: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-600"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-900"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ORIGINAL PROFILE PAGE ================= */}
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-md pl-8 py-10 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center border-r md:border-r-2 border-gray-200 pr-0 md:pr-6">
              <img
                src="https://manage.healu360.com/uploads/2024/12/777e763370d3f226583718e1ab64327d.jpg"
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

              <div>
                <p className="text-gray-500 text-sm mb-1">Sex</p>
                <p className="font-semibold text-gray-800">{profileData.sex}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Age</p>
                <p className="font-semibold text-gray-800">{profileData.age}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Degree</p>
                <p className="font-semibold text-gray-800">{profileData.degree}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Speciality</p>
                <p className="font-semibold text-gray-800">{profileData.speciality}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Phone No</p>
                <p className="font-semibold text-gray-800">{profileData.phone}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Hospital</p>
                <p className="font-semibold text-gray-800">{profileData.hospital}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">Address</p>
                <p className="font-semibold text-gray-800">{profileData.address}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">City</p>
                <p className="font-semibold text-gray-800">{profileData.city}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOUR CARDS */}
        <h2 className="text-2xl font-semibold mt-10 mb-6">Doctor Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">Total Experience</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              5+ Years
            </h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">BMDC Number</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              84220
            </h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">Joined Doctime</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              15 Mar, 2020
            </h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">Total Rating</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              ⭐ 5.00
            </h3>
          </div>
        </div>
      </div>

    </Doctordashboard>
  );
}

export default Profile;
