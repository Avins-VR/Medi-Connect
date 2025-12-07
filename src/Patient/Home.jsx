import React from "react";
import Patientdashboard from "./Patientdashboard";
import HomeImage from "../assets/Home page image.avif";

function Home() {
  return (
    <Patientdashboard>
      <div className="w-[1240px] h-[627px] mt-[-10px] rounded-xl shadow overflow-hidden">
        <img src={HomeImage} className="w-full h-full object-cover" />
      </div>
    </Patientdashboard>
  );
}
export default Home;