import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";

function Medicinetaking() {
  const [medications, setMedications] = useState([
    {
      name: "Metformin",
      category: "Diabetes Management",
      dosage: "500mg",
      frequency: "Twice daily",
      time: "8:00 AM, 8:00 PM",
      instructions: "Take with meals to reduce stomach upset.",
    },
    {
      name: "Lisinopril",
      category: "Blood Pressure",
      dosage: "10mg",
      frequency: "Once daily",
      time: "9:00 AM",
      instructions: "Take at the same time each day.",
    },
    {
      name: "Atorvastatin",
      category: "Cholesterol",
      dosage: "20mg",
      frequency: "Once daily",
      time: "10:00 PM",
      instructions: "Take in the evening for best results.",
    },
    {
      name: "Omeprazole",
      category: "Acid Reflux",
      dosage: "40mg",
      frequency: "Once daily",
      time: "7:30 AM",
      instructions: "Take 30 minutes before breakfast.",
    },
  ]);

  // Add modal toggle
  const [showAddModal, setShowAddModal] = useState(false);

  // New Medication input data
  const [newMed, setNewMed] = useState({
    name: "",
    category: "",
    dosage: "",
    frequency: "",
    time: "",
    instructions: "",
  });

  // Add medication function
  const handleAddMedication = () => {
    setMedications([...medications, newMed]);
    setNewMed({
      name: "",
      category: "",
      dosage: "",
      frequency: "",
      time: "",
      instructions: "",
    });
    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      <div className="w-full max-w-6xl mx-auto p-8 pb-20 relative">

        {/* ================== ADD MEDICATION POPUP ================== */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl border overflow-y-auto max-h-[80vh]">
              <h2 className="text-2xl font-semibold mb-6">Add Medication</h2>

              {/* Two Inputs Per Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={newMed.name}
                    onChange={(e) =>
                      setNewMed({ ...newMed, name: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Category</label>
                  <input
                    type="text"
                    value={newMed.category}
                    onChange={(e) =>
                      setNewMed({ ...newMed, category: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Dosage */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Dosage</label>
                  <input
                    type="text"
                    value={newMed.dosage}
                    onChange={(e) =>
                      setNewMed({ ...newMed, dosage: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Frequency */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Frequency</label>
                  <input
                    type="text"
                    value={newMed.frequency}
                    onChange={(e) =>
                      setNewMed({ ...newMed, frequency: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Time</label>
                  <input
                    type="text"
                    value={newMed.time}
                    onChange={(e) =>
                      setNewMed({ ...newMed, time: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Instructions */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">
                    Instructions
                  </label>
                  <input
                    type="text"
                    value={newMed.instructions}
                    onChange={(e) =>
                      setNewMed({ ...newMed, instructions: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddMedication}
                  className="px-6 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-950"
                >
                  Add Medication
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================== HEADER ================== */}
        <h1 className="text-3xl font-bold text-center mt-[-30px] text-gray-900 mb-4">
          Current Medications
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Manage and track your prescribed medications
        </p>

        {/* ================== MEDICATION LIST ================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {medications.map((med, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="bg-blue-100 text-indigo-600 px-4 py-3 mt-[-10px] rounded-full">
                  <i className="bi bi-capsule text-[20px]"></i>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mt-1">{med.name}</h2>
                  <p className="text-gray-500 text-sm mt-1 mb-4">
                    {med.category}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-4">
                  <i className="bi bi-droplet text-blue-500"></i>
                  <strong>Dosage:</strong> {med.dosage}
                </p>

                <p className="flex items-center gap-4">
                  <i className="bi bi-clock-history text-blue-500"></i>
                  <strong>Frequency:</strong> {med.frequency}
                </p>

                <p className="flex items-center gap-4">
                  <i className="bi bi-alarm text-blue-500"></i>
                  <strong>Time:</strong> {med.time}
                </p>

                <hr className="border-t border-gray-300 my-4" />

                <p className="text-sm mt-4">
                  <strong>Instructions:</strong>{" "}
                  <span className="text-gray-600">{med.instructions}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================== ADD BUTTON ================== */}
        <button
          onClick={() => setShowAddModal(true)}
          className="
            fixed 
            bottom-5 
            right-20 
            bg-indigo-900 
            hover:bg-indigo-800 
            text-white 
            rounded-xl 
            w-12 
            h-12 
            flex 
            items-center 
            justify-center 
            shadow-2xl 
            text-xl
          "
        >
          <i className="bi bi-plus-lg"></i>
        </button>

      </div>
    </Patientdashboard>
  );
}

export default Medicinetaking;
