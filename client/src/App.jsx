import Login from "./Login";
import Signup from "./Signup";
import Home from "./Patient/Home";
import BookAppointment from "./Patient/BookAppointment";
import EmergencyContact from "./Patient/EmergencyContact";
import UpcomingAppointment from "./Patient/UpcomingAppointment";
import Patientdashboard  from "./Patient/Patientdashboard";
import Medicinetaking from "./Patient/Medicinetaking";
import Prescriptions from "./Patient/Prescriptions";
import HealthTimeline from "./Patient/HealthTimeline";
import LabResults from "./Patient/Labresult";
import Profile from "./Patient/profile";

import Doctordashboard from "./Doctor/Doctordashboard";
import Doctorhome from "./Doctor/home";
import Doctorprofile from "./Doctor/Doctor profile";
import AddPatient from "./Doctor/AddPatient";
import DailyAppointment from "./Doctor/DailyAppointment";
import MedicalSchedulePlanner from "./Doctor/MedicalSchedulePlanner";
import PatientManagement from "./Doctor/PatientManagement"; 
import ConsultationOverview from "./Doctor/ConsultationOverview";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>

      {/* Default route → redirect to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/patient/home" element={<Home />} />
      <Route path="/BookAppointment" element={<BookAppointment />}  />
      <Route path="/Patientdashboard" element={<Patientdashboard />} />
      <Route path="/EmergencyContact" element={<EmergencyContact />} />
      <Route path="/upcomingAppointment" element={<UpcomingAppointment />} />
      <Route path="/Medicine" element={<Medicinetaking />} />
      <Route path="/Prescriptions" element={<Prescriptions />} />
      <Route path="/history" element={<HealthTimeline />} />
      <Route path="/labresults" element={<LabResults />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/Doctordashboard" element={<Doctordashboard />} />
      <Route path="/Doctor/home" element={<Doctorhome />} />
      <Route path="/Doctor/profile" element={<Doctorprofile />} />
      <Route path="/AddPatient" element={<AddPatient />} />
      <Route path="/DailyAppointments" element={<DailyAppointment />} />
      <Route path="/MedicalSchedulePlanner" element={<MedicalSchedulePlanner />} />
      <Route path="/PatientManagement" element={<PatientManagement />} />
      <Route path="/ConsultationOverview" element={<ConsultationOverview />} />
    </Routes>
  );
}

export default App;
