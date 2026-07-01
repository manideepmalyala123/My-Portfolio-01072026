import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-24
          left-24
          w-[420px]
          h-[420px]
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-10
          w-[520px]
          h-[520px]
          rounded-full
          bg-purple-500/15
          blur-[220px]
        "
      />

    </div>
  );
};

export default Background;