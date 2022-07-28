import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const BouncyChevron = () => {
  return (
    <div className="absolute top-screen left-1/2 transform -translate-x-1/2 -translate-y-full pb-6">
      <motion.div
        animate={{
          y: ["25%", "-25%"]
        }}
        transition={{
          y: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeOut",
          }
        }}
      >
        <FiChevronDown className="text-white text-5xl" />
      </motion.div>
    </div>
  );
};

export default BouncyChevron;