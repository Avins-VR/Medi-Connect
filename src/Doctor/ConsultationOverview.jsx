import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Doctordashboard from "./Doctordashboard";

function ConsultationOverview() {
  // SAMPLE DATA
  const data = [
    { day: "Mon", consultations: 85, appointments: 50 },
    { day: "Tue", consultations: 40, appointments: 45 },
    { day: "Wed", consultations: 55, appointments: 30 },
    { day: "Thu", consultations: 95, appointments: 48 },
    { day: "Fri", consultations: 40, appointments: 12 },
    { day: "Sat", consultations: 88, appointments: 33 },
    { day: "Sun", consultations: 47, appointments: 70 },
  ];

  return (
    <Doctordashboard>
    <div className="w-full max-w-6xl mx-auto p-8">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 mt-[-10px] mb-8">
        Consultation Overview
      </h1>

      {/* CHART CARD */}
      <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Weekly Consultation Statistics
          </h2>

          {/* LEGEND */}
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              Medical Consultations
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-300"></span>
              Appointments
            </span>
          </div>
        </div>

        {/* CHART */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={45}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
              <XAxis dataKey="day" tick={{ fill: "#555" }} />
              <YAxis tick={{ fill: "#555" }} />
              <Tooltip />
              <Legend />

              <Bar dataKey="consultations" fill="#059669" radius={[6, 6, 0, 0]} />
              <Bar dataKey="appointments" fill="#6ee7b7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
    </Doctordashboard>
  );
}

export default ConsultationOverview;