import React, { useState } from "react";
import Doctordashboard from "./Doctordashboard";

function PatientManagement() {
  const stats = [
    { label: "Total Patients", count: 100, text: "text-indigo-700", icon: "bi-people" },
    { label: "Active Cases", count: 80, text: "text-blue-700", icon: "bi-heart-pulse" },
    { label: "Stable", count: 50, text: "text-green-700", icon: "bi-shield-check" },
    { label: "Critical", count: 10, text: "text-red-700", icon: "bi-exclamation-octagon" },
  ];

  const initialPatients = [
    {
      name: "Willy Ben Chen",
      age: 27,
      dob: "10-02-1998",
      gender: "Male",
      diagnosis: "Diabetes",
      last_appointment: "10-04-2025",
      status: "Stable",
      img: "https://i.pravatar.cc/80?img=1"
    },
    {
      name: "Emily Watford",
      age: 37,
      dob: "20-01-1988",
      gender: "Female",
      diagnosis: "Hypertension",
      last_appointment: "09-04-2025",
      status: "Critical",
      img: "https://i.pravatar.cc/80?img=2"
    },
    {
      name: "Nicholas Robertson",
      age: 25,
      dob: "24-06-1999",
      gender: "Male",
      diagnosis: "Anxiety Disorder",
      last_appointment: "08-04-2025",
      status: "Stable",
      img: "https://i.pravatar.cc/80?img=3"
    },
    {
      name: "Sophia Martinez",
      age: 30,
      dob: "15-03-1994",
      gender: "Female",
      diagnosis: "Asthma",
      last_appointment: "07-04-2025",
      status: "Mild",
      img: "https://i.pravatar.cc/80?img=4"
    },
    {
      name: "Liam Johnson",
      age: 45,
      dob: "05-11-1978",
      gender: "Male",
      diagnosis: "Arthritis",
      last_appointment: "06-04-2025",
      status: "Stable",
      img: "https://i.pravatar.cc/80?img=5"
    }
  ];

  const [patients, setPatients] = useState(initialPatients);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // FOR EDIT POPUP
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const statusStyle = {
    Stable: "bg-green-100 text-green-600",
    Mild: "bg-yellow-100 text-yellow-600",
    Critical: "bg-red-100 text-red-600",
  };

  // FILTER & SEARCH LOGIC
  const filteredPatients = patients.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filterStatus === "All" || p.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // DELETE PATIENT
  const deletePatient = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
    setOpenMenu(null);
  };

  // OPEN EDIT MODAL
  const openEdit = (patient, index) => {
    setEditData({ ...patient, index });
    setEditModal(true);
    setOpenMenu(null);
  };

  // SAVE EDITED PATIENT
  const saveEdit = () => {
    const updated = [...patients];
    updated[editData.index] = { ...editData };
    setPatients(updated);
    setEditModal(false);
  };

  return (
    <Doctordashboard>
      <div className="w-full max-w-7xl mx-auto p-10">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-8 mt-[-20px]">Patient Management</h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl p-6 shadow-sm bg-white">
              <div className="flex items-center gap-6">
                <div className={`text-3xl ${s.text}`}>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <div>
                  <p className={`text-2xl font-bold ${s.text}`}>{s.count}</p>
                  <p className="text-gray-600">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="relative w-[800px]">
  <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>

  <input
    type="text"
    placeholder="Search patient..."
    className="bg-white pl-12 pr-4 py-3 border border-gray-400 rounded-lg w-full"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>


          <select
            className=" bg-white px-4 w-[200px] py-3 border border-gray-400 rounded-lg"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Stable">Stable</option>
            <option value="Mild">Mild</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-700 text-lg font-semibold border-b">
                <th className="py-4 pl-5">Name</th>
                <th className="py-4">Last Appointment</th>
                <th className="py-4">Age</th>
                <th className="py-4">Gender</th>
                <th className="py-4">Diagnosis</th>
                <th className="py-4">Status</th>
                <th className="py-4"></th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((p, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">

                  {/* NAME */}
                  <td className="py-5 pl-5 flex items-center gap-4">
                    <img src={p.img} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.dob}</p>
                    </div>
                  </td>

                  <td>{p.last_appointment}</td>
                  <td>{p.age}</td>
                  <td>{p.gender}</td>
                  <td>{p.diagnosis}</td>

                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm ${statusStyle[p.status]}`}>
                      {p.status}
                    </span>
                  </td>

                  {/* ACTION MENU */}
                  <td className="relative text-right pr-6">
                    <button onClick={() => setOpenMenu(openMenu === i ? null : i)}>
                      <i className="bi bi-three-dots-vertical text-xl"></i>
                    </button>

                    {openMenu === i && (
                      <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg w-32 border">
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => openEdit(p, i)}
                        >
                          Edit
                        </button>

                        <button
                          className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                          onClick={() => deletePatient(i)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 ml-[150px] rounded-xl w-[450px] relative shadow-lg">

            <button className="absolute top-4 right-4" onClick={() => setEditModal(false)}>✖</button>

            <h2 className="text-2xl font-semibold mb-4">Edit Patient</h2>

            {/* Fields */}
            <input
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4"
            />

            <input
              value={editData.diagnosis}
              onChange={(e) => setEditData({ ...editData, diagnosis: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4"
            />

            <select
              value={editData.status}
              onChange={(e) => setEditData({ ...editData, status: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4"
            >
              <option>Stable</option>
              <option>Mild</option>
              <option>Critical</option>
            </select>

            <button
              className="bg-indigo-600 w-full py-3 rounded-lg text-white font-medium"
              onClick={saveEdit}
            >
              Save Changes
            </button>

          </div>
        </div>
      )}
    </Doctordashboard>
  );
}

export default PatientManagement;
