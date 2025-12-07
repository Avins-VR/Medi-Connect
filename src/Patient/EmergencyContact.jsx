import React from "react";
import Patientdashboard  from "./Patientdashboard";   // <-- IMPORT YOUR LAYOUT

export default function EmergencyContact() {
  return (
    <Patientdashboard>
      <div className="flex items-center justify-center p-8">

        {/* MAIN WRAPPER */}
        <div className="flex flex-col md:flex-row gap-32">

          {/* LEFT CARD */}
          <div className="w-[400px] bg-white overflow-hidden flex items-center justify-center rounded-3xl">
            <div className="w-[400px] h-[570px] bg-white/30 backdrop-blur-4xl rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Emergency Call
              </h2>

              <img
                src="./src/assets/Emergency call.png"
                alt="Emergency Phone"
                className="w-80 h-[280px] mx-auto mb-6"
              />

              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Emergency care is always within reach. 
                Contact us for quick medical guidance and support.
              </p>

              <a
                href="tel:+91 9488715046"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition text-center block"
              >
                Start
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-[400px] bg-white overflow-hidden flex items-center justify-center rounded-3xl">
            <div className="w-[400px] h-[570px] backdrop-blur-4xl rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Choose Service
              </h2>

              <p className="text-gray-600 text-center text-[16px] leading-relaxed mb-8">
                Choose the service you need and get quick medical assistance.
              </p>

              <div className="grid grid-cols-2 gap-8">

                {/* Ambulance */}
                <div className="bg-[#E8ECFF] rounded-2xl p-5 text-center shadow-md">
                  <img
                    src="./src/assets/Ambulance.png"
                    className="w-16 mx-auto mb-3"
                    alt="Ambulance"
                  />
                  <a href="tel:108" className="text-gray-700 text-[18px] font-medium cursor-pointer">
                    Ambulance
                  </a>
                </div>

                {/* First Aid */}
                <div className="bg-[#E8ECFF] rounded-2xl p-5 text-center shadow-md">
                  <img
                    src="./src/assets/firstaid.png"
                    className="w-16 mx-auto mb-3"
                    alt="First Aid"
                  />
                  <a
                    href="https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps"
                    className="text-gray-700 text-[18px] font-medium cursor-pointer"
                  >
                    First Aid
                  </a>
                </div>

                {/* Hospital (Centered) */}
                <div className="bg-[#E8ECFF] rounded-2xl p-5 text-center shadow-md col-span-2 w-[160px] mx-auto">
                  <img
                    src="./src/assets/location.png"
                    className="w-16 mx-auto mb-3"
                    alt="Hospital"
                  />
                  <a
                    href="https://www.google.com/maps/place/Magna+Hospital/"
                    className="text-gray-700 text-[18px] font-medium"
                  >
                    Hospital
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </Patientdashboard>
  );
}
