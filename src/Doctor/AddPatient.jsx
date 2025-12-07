import React from "react";
import Doctordashboard from "./Doctordashboard";

function AddPatient() {
  return (
    <Doctordashboard>

      {/* PAGE TITLE OUTSIDE THE CARD */}
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <h2 className="text-3xl font-bold ml-[20px] text-gray-800 mb-2">Add Patient</h2>
      </div>

      <div className="min-h-screen flex items-start justify-center p-6">
        <div className="w-[1100px] bg-white overflow-hidden rounded-3xl shadow">

          <div className="w-[1100px] p-12 bg-white rounded-3xl">
            
            {/* FORM BLOCK */}
            <div className="space-y-4">

              {/* ROW 1: NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Patient Name */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4 pt-6">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 text-base outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4 pt-6">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 text-base outline-none"
                  />
                </div>

              </div>

              {/* ROW 2: GENDER + CONTACT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 pt-6">

                {/* Gender */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Gender
                  </label>

                  <div className="flex items-center gap-10 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      <span>Male</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      <span>Female</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>

              </div>

              {/* ROW 3: AGE + ADDRESS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 pt-6">

                {/* Age */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="Enter age"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full address"
                    className="w-full bg-gray-100 rounded-xl shadow px-4 py-3 text-gray-700 outline-none"
                  />
                </div>

              </div>

              {/* ROW 4: BLOOD GROUP + STATUS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 pt-6">

                {/* Blood Group */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Blood Group
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow px-5 py-4 text-gray-700 outline-none">
                    <option>Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-gray-900 font-medium mb-4">
                    Status
                  </label>
                  <select className="w-full bg-gray-100 rounded-xl shadow px-5 py-4 text-gray-700 outline-none">
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center">
                <button className="w-96 bg-indigo-600 text-white py-4 rounded-xl mt-10 font-semibold hover:bg-indigo-700 transition">
                  Add Patient
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </Doctordashboard>
  );
}

export default AddPatient;
