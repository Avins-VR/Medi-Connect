import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";

function HealthTimeline() {
  const [events, setEvents] = useState([
    {
      month: "NOV",
      year: "2024",
      type: "HOSPITALIZATION",
      title: "Emergency Room Visit - Chest Pain",
      desc: "Presented with acute chest pain. ECG and cardiac enzymes normal. Diagnosed as musculoskeletal pain.",
      doctor: "Dr. Robert Kim",
      Date: "November 10, 2024",
      significance: "Significant",
    },
    {
      month: "OCT",
      year: "2024",
      type: "DIAGNOSTIC",
      title: "Routine Blood Panel",
      desc: "CBC, lipid profile, and kidney function tests performed. All results were within the normal range.",
      doctor: "Dr. John Patel",
      Date: "October 15, 2024",
      significance: "Normal",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [newEvent, setNewEvent] = useState({
    month: "",
    year: "",
    type: "",
    title: "",
    desc: "",
    doctor: "",
    Date: "",
    significance: "",
  });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);

    setNewEvent({
      month: "",
      year: "",
      type: "",
      title: "",
      desc: "",
      doctor: "",
      Date: "",
      significance: "",
    });

    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      <div className="w-full max-w-6xl mx-auto py-12 px-6">

        {/* ======================= ADD TIMELINE POPUP ======================= */}
        {showAddModal && (
          <div className="
            fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm 
            flex justify-center items-center z-50
          ">
            <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl border">

              <h2 className="text-2xl font-semibold mb-6">Add Timeline Event</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Month */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Month</label>
                  <input
                    type="text"
                    value={newEvent.month}
                    onChange={(e) => setNewEvent({ ...newEvent, month: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Year</label>
                  <input
                    type="text"
                    value={newEvent.year}
                    onChange={(e) => setNewEvent({ ...newEvent, year: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Type</label>
                  <input
                    type="text"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Title</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="text-gray-600 text-sm mb-1 block">Description</label>
                  <textarea
                    rows="3"
                    value={newEvent.desc}
                    onChange={(e) => setNewEvent({ ...newEvent, desc: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  ></textarea>
                </div>

                {/* Doctor */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Doctor</label>
                  <input
                    type="text"
                    value={newEvent.doctor}
                    onChange={(e) => setNewEvent({ ...newEvent, doctor: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="text-gray-600 text-sm mb-1 block">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. November 10, 2024"
                    value={newEvent.Date}
                    onChange={(e) => setNewEvent({ ...newEvent, Date: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                </div>

                {/* Significance */}
                <div className="md:col-span-2">
                  <label className="text-gray-600 text-sm mb-1 block">Significance</label>
                  <input
                    type="text"
                    value={newEvent.significance}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, significance: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
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
                  onClick={handleAddEvent}
                  className="px-6 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-950"
                >
                  Add Event
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ======================= HEADER ======================= */}
        <h1 className="text-3xl text-center font-bold mt-[-40px] mb-5 text-gray-800">
          Health History Timeline
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Your complete medical journey at a glance — unified history
        </p>

        {/* ======================= TIMELINE ======================= */}
        <div className="relative grid grid-cols-[120px,1fr] gap-16">
          <div className="absolute left-[55px] top-0 w-[2px] bg-gray-300 h-full"></div>

          {events.map((item, index) => (
            <div key={index} className="contents">

              <div className="relative flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-4 border-white shadow-md bg-indigo-500"></div>

                <div className="mr-40 mt-[-22px]">
                  <p className="text-sm font-semibold text-gray-800">{item.month}</p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
              </div>

              <div className="bg-white w-full max-w-4xl shadow-md mb-5 rounded-2xl p-6 border border-gray-100">
                <span className="text-[#215B63] text-sm font-semibold flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#215B63] rounded-full"></span>
                  {item.type}
                </span>

                <h2 className="text-xl font-semibold mt-4 text-gray-900">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-[16px] leading-relaxed mt-4">
                  {item.desc}
                </p>

                <div className="flex items-center flex-wrap gap-8 mt-4 text-[16px] text-gray-500">
                  <span className="flex items-center gap-3">
                    <i className="bi bi-person-circle text-blue-500"></i>
                    {item.doctor}
                  </span>

                  <span className="flex items-center gap-3">
                    <i className="bi bi-calendar-check text-blue-500"></i>
                    {item.Date}
                  </span>
                </div>

                <p className="text-sm text-orange-500 flex items-center gap-2 mt-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  {item.significance}
                </p>
              </div>
            </div>
          ))}
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

export default HealthTimeline;
