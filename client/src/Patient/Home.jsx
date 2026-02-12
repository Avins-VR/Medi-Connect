import React from "react";
import Patientdashboard from "./Patientdashboard";
import HomeImage from "../assets/Home page image.avif";
import { motion } from "framer-motion";

function Home() {
  return (
    <Patientdashboard>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          w-full
          max-w-[1240px]
          h-[370px]
          sm:h-[600px]
          md:h-[720px]
          lg:h-[740px]
          xl:h-[750px]
          mt-[-15px]
          rounded-xl
          shadow
          overflow-hidden
        "
      >
        <motion.img
          src={HomeImage}
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>
    </Patientdashboard>
  );
}

export default Home;
