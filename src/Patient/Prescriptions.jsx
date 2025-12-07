import React, { useState } from "react";
import Patientdashboard from "./Patientdashboard";

function Prescriptions() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      title: "Prescription 1",
      doctor: "Dr. Rajan",
      date: "12 Nov 2025",
      image:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11042-020-10151-w/MediaObjects/11042_2020_10151_Fig12_HTML.png",
    },
    {
      id: 2,
      title: "Prescription 2",
      doctor: "Dr. Meena",
      date: "05 Oct 2025",
      image:
        "https://i.pinimg.com/736x/ce/2c/a0/ce2ca0f38002e2f6e4392e8173cd2551.jpg",
    },
    {
      id: 3,
      title: "Prescription 3",
      doctor: "Dr. Karthik",
      date: "22 Sep 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuox6Vp7oSphH9_d1LkaRAwRxa3u4iKID1A&s",
    },
  ]);

  // ADD POPUP STATE
  const [showAddModal, setShowAddModal] = useState(false);

  // NEW PRESCRIPTION DATA
  const [newPrescription, setNewPrescription] = useState({
    title: "",
    doctor: "",
    date: "",
    image: "",
  });

  // LOCAL IMAGE PREVIEW
  const [previewImage, setPreviewImage] = useState(null);

  // HANDLE IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);
    setNewPrescription({ ...newPrescription, image: imageURL });
  };

  // ADD PRESCRIPTION FUNCTION
  const handleAddPrescription = () => {
    setPrescriptions([
      ...prescriptions,
      {
        id: prescriptions.length + 1,
        ...newPrescription,
      },
    ]);

    // RESET FORM
    setNewPrescription({ title: "", doctor: "", date: "", image: "" });
    setPreviewImage(null);
    setShowAddModal(false);
  };

  return (
    <Patientdashboard>
      <div className="w-full max-w-6xl mx-auto p-8">

        {/* ======================= ADD PRESCRIPTION POPUP ======================= */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl border">

              <h2 className="text-2xl font-semibold mb-6">Add Prescription</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Title */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Title</label>
                  <input
                    type="text"
                    value={newPrescription.title}
                    onChange={(e) =>
                      setNewPrescription({
                        ...newPrescription,
                        title: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Doctor */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Doctor</label>
                  <input
                    type="text"
                    value={newPrescription.doctor}
                    onChange={(e) =>
                      setNewPrescription({
                        ...newPrescription,
                        doctor: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. 12 Nov 2025"
                    value={newPrescription.date}
                    onChange={(e) =>
                      setNewPrescription({
                        ...newPrescription,
                        date: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col">
                  <label className="text-gray-600 text-sm mb-2">
                    Prescription Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />

                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-32 object-contain mt-3 rounded-lg border"
                    />
                  )}
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
                  onClick={handleAddPrescription}
                  className="px-6 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-950"
                >
                  Add Prescription
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================= HEADER ======================= */}
        <h1 className="text-3xl text-center mt-[-30px] font-bold text-gray-900 mb-5">
          Recent Prescriptions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          View and manage your prescription history
        </p>

        {/* ======================= PRESCRIPTIONS GRID ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-24 justify-items-center">
          {prescriptions.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl p-7 flex flex-row items-center gap-6 border border-gray-200"
            >
              {/* LEFT → DETAILS */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-1">
                  <div className="bg-blue-100 text-indigo-600 px-3 py-2 rounded-full">
                    <i className="bi bi-file-earmark-ppt-fill text-[20px]"></i>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{p.title}</h2>
                </div>

                <p className="flex items-center gap-3 text-gray-600 text-[16px] mt-6">
                  <i className="bi bi-person-lines-fill text-blue-500"></i>
                  <span className="text-sm">
                    <strong>Doctor:</strong> {p.doctor}
                  </span>
                </p>

                <p className="flex items-center gap-3 text-gray-600 text-[16px] mt-4">
                  <i className="bi bi-calendar-check text-blue-500"></i>
                  <span className="text-sm">
                    <strong>Date:</strong> {p.date}
                  </span>
                </p>
              </div>

              {/* RIGHT → IMAGE */}
              <div className="relative w-40 h-36 shrink-0">
                <img
                  src={p.image}
                  alt="Prescription"
                  className="w-full h-full object-cover rounded-lg border"
                />

                <button
                  onClick={() => setSelectedImage(p.image)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl rounded-lg opacity-0 hover:opacity-100 transition"
                >
                  <i className="bi bi-eye"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ======================= IMAGE PREVIEW MODAL ======================= */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-[#1e1e1e] p-10 rounded-2xl shadow-xl w-[90%] max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <img
                src={selectedImage}
                alt="Full Prescription"
                className="w-full max-h-[500px] object-contain rounded-xl"
              />
            </div>
          </div>
        )}

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

export default Prescriptions;
