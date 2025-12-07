import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";

function LabResults() {
  const [results, setResults] = useState([
    {
      date: "11/01/25",
      name: "Wet Mount",
      status: "Normal",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "19/03/25",
      name: "Vaginal PH",
      status: "Normal",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "21/06/25",
      name: "Gonorrhea (urine)",
      status: "Negative",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "09/08/25",
      name: "Chlamydia (urine)",
      status: "Negative",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "14/09/25",
      name: "Pap IG, HPV-hr",
      status: "Negative",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "30/11/25",
      name: "Blood Sugar",
      status: "Normal",
      doctor: "Dr. Amy Nelson",
    },
    {
      date: "15/12/25",
      name: "Cholesterol",
      status: "Abnormal",
      doctor: "Dr. Amy Nelson",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [newResult, setNewResult] = useState({
    date: "",
    name: "",
    status: "",
    doctor: "",
  });

  const statusColors = {
    Normal: "bg-green-500",
    Negative: "bg-green-500",
    Abnormal: "bg-red-500",
  };

  const handleAddResult = () => {
    setResults([...results, newResult]);

    setNewResult({
      date: "",
      name: "",
      status: "",
      doctor: "",
    });

    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      <div className="w-full max-w-6xl mx-auto p-8">

        {/* ======================= ADD RESULT POPUP ======================= */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl border">

              <h2 className="text-2xl font-semibold mb-6">Add Lab Result</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Date */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Order Date</label>
                  <input
                    type="date"
                    value={newResult.date}
                    onChange={(e) => setNewResult({ ...newResult, date: e.target.value })}
                    placeholder="11/01/25"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Test Name */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Test Name</label>
                  <input
                    type="text"
                    value={newResult.name}
                    onChange={(e) => setNewResult({ ...newResult, name: e.target.value })}
                    placeholder="Blood Sugar"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Result</label>
                  <select
                    value={newResult.status}
                    onChange={(e) => setNewResult({ ...newResult, status: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Normal">Normal</option>
                    <option value="Negative">Negative</option>
                    <option value="Abnormal">Abnormal</option>
                  </select>
                </div>

                {/* Doctor */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Physician</label>
                  <input
                    type="text"
                    value={newResult.doctor}
                    onChange={(e) => setNewResult({ ...newResult, doctor: e.target.value })}
                    placeholder="Dr. Amy Nelson"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddResult}
                  className="px-6 py-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-950"
                >
                  Add Result
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================= HEADER ======================= */}
        <h1 className="text-3xl font-bold text-center mt-[-30px] text-gray-900 mb-4">
          Recent Lab Results
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Manage and track your prescribed medications
        </p>

        {/* ======================= TABLE CARD ======================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10 border border-gray-200">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-4 text-gray-700 text-lg font-semibold pb-3 border-b">
            <strong>Order Date</strong>
            <strong>Test Name</strong>
            <strong>Result</strong>
            <strong>Physician</strong>
          </div>

          {/* TABLE RECORDS */}
          <div className="divide-y">
            {results.map((r, index) => (
              <div
                key={index}
                className="grid grid-cols-4 py-4 items-center text-gray-700 text-sm"
              >
                <span>{r.date}</span>
                <span className="font-medium">{r.name}</span>

                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusColors[r.status]}`}></span>
                  {r.status}
                </span>

                <span className="text-gray-800">{r.doctor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================= ADD BUTTON ======================= */}
        <button
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-5 right-20 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl w-12 h-12 flex items-center justify-center shadow-2xl text-xl"
        >
          <i className="bi bi-plus-lg"></i>
        </button>

      </div>
    </Patientdashboard>
  );
}

export default LabResults;
