import React, { useState, useEffect } from "react";
import Doctordashboard from "./Doctordashboard";

function MedicalSchedulePlanner() {
  const statusStyles = {
    Confirmed: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Completed: "bg-gray-200 text-gray-700",
  };

  // Load saved appointments from localStorage
  const loadAppointments = () => {
    const saved = localStorage.getItem("doctor-appointments");
    return saved ? JSON.parse(saved) : [
      { name: "Sarah Johnson", type: "Checkup", time: "09:00", status: "Confirmed" },
      { name: "Michael Chen", type: "Consultation", time: "10:30", status: "Pending" },
      { name: "Emily Davis", type: "Follow-up", time: "11:00", status: "Confirmed" },
      { name: "James Wilson", type: "Checkup", time: "14:00", status: "Completed" },
      { name: "Lisa Anderson", type: "Health Review", time: "15:30", status: "Confirmed" },
    ];
  };

  const [appointments, setAppointments] = useState(loadAppointments);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    time: "",
    status: "",
  });

  // Save updates to localStorage
  useEffect(() => {
    localStorage.setItem("doctor-appointments", JSON.stringify(appointments));
  }, [appointments]);

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const openAddModal = () => {
    setEditingIndex(null);
    setFormData({ name: "", type: "", time: "", status: "" });
    setShowModal(true);
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setFormData(appointments[index]);
    setShowModal(true);
  };

  const saveSchedule = () => {
    if (!formData.name || !formData.type || !formData.time || !formData.status) return;

    if (editingIndex !== null) {
      // Update existing
      const updated = [...appointments];
      updated[editingIndex] = formData;
      setAppointments(updated);
    } else {
      // Add new schedule
      setAppointments([...appointments, formData]);
    }

    setShowModal(false);
  };

  const deleteSchedule = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
  };
  // DATE STATE
const [currentDate, setCurrentDate] = useState(new Date());

// Format the date
const formatDate = (dateObj) => {
  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

// Go to previous day
const goPrevDay = () => {
  const newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() - 1);
  setCurrentDate(newDate);
};

// Go to next day
const goNextDay = () => {
  const newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() + 1);
  setCurrentDate(newDate);
};

  return (
    <Doctordashboard>
      <div className="w-full max-w-6xl mx-auto p-4 px-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Schedule</h1>

          <button
            className="bg-indigo-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800"
            onClick={openAddModal}
          >
            <i className="bi bi-plus-lg"></i> Add
          </button>
        </div>

        {/* DATE NAV */}
        {/* DATE NAVIGATION */}
<div className="flex justify-center items-center gap-6 mb-10">
  <button
    className="text-gray-500 hover:text-gray-700 text-xl"
    onClick={goPrevDay}
  >
    <i className="bi bi-chevron-left"></i>
  </button>

  <h2 className="text-xl font-semibold text-gray-800">
    {formatDate(currentDate)}
  </h2>

  <button
    className="text-gray-500 hover:text-gray-700 text-xl"
    onClick={goNextDay}
  >
    <i className="bi bi-chevron-right"></i>
  </button>
</div>


        {/* APPOINTMENT LIST */}
        <div className="space-y-10">
          {appointments.map((a, index) => (
            <div
              key={index}
              className="bg-white border shadow rounded-xl p-5 flex items-center justify-between relative"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-person text-indigo-500 text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">{a.name}</p>
                  <p className="text-gray-500 text-sm">{a.type}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <i className="bi bi-clock"></i>
                  {a.time}
                </div>

                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[a.status]}`}>
                  {a.status}
                </span>

                {/* 3-DOTS MENU */}
                <div className="relative group cursor-pointer">
                  <i className="bi bi-three-dots-vertical text-xl text-gray-700"></i>

                  <div className="hidden group-hover:flex flex-col absolute right-0 top-6 bg-white shadow-lg border rounded-lg w-28 z-30">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => openEditModal(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                      onClick={() => deleteSchedule(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[450px] p-8 rounded-2xl shadow-xl relative">

            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6">
              {editingIndex !== null ? "Edit Schedule" : "Add New Schedule"}
            </h2>

            <div className="space-y-5">
              <div>
                <label className="font-medium">Patient Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              <div>
                <label className="font-medium">Consultation Type</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2"
                  value={formData.type}
                  onChange={(e) => updateField("type", e.target.value)}
                />
              </div>

              <div>
                <label className="font-medium">Time</label>
                <input
                  type="time"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2"
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                />
              </div>

              <div>
                <label className="font-medium">Status</label>
                <select
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2"
                  value={formData.status}
                  onChange={(e) => updateField("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  className="px-5 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="px-5 py-2 bg-indigo-700 text-white rounded-lg"
                  onClick={saveSchedule}
                >
                  Save
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </Doctordashboard>
  );
}

export default MedicalSchedulePlanner;
