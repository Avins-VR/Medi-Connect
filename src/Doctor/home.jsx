import React from "react";
import Doctordashboard from "./Doctordashboard";
import HomeImage from "../assets/Home page image.avif";
import { motion } from "framer-motion";

function Home() {
  return (
    <Doctordashboard>
      {/* PAGE FADE-IN */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-[1225px]
          h-[350px]
          sm:h-[520px]
          md:h-[620px]
          lg:h-[627px]
          xl:h-[627px]
          rounded-xl
          shadow
          overflow-hidden
        "
      >
        {/* IMAGE ANIMATION */}
        <motion.img
          src={HomeImage}
          className="w-full h-full object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        />
      </motion.div>
    </Doctordashboard>
  );
}

export default Home;
