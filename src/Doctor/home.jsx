import React from "react";
import Doctordashboard from "./Doctordashboard";
import HomeImage from "../assets/Home page image.avif";

function Home() {
  return (
    <Doctordashboard>
      <div className="w-[1225px] h-[627px] rounded-xl shadow overflow-hidden">
        <img src={HomeImage} className="w-full h-full object-cover" />
      </div>
    </Doctordashboard>
  );
}
export default Home;