import developer from "../../assets/images/developer.png";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30 scale-110" />

        {/* Card */}
        <div className="relative glass rounded-3xl p-6">

          <img
            src={developer}
            alt="Manideep"
            className="
            w-72
            h-72
            rounded-full
            object-cover
            border-4
            border-primary
            shadow-[0_0_40px_rgba(59,130,246,.35)]
            transition-transform
            duration-500
            hover:scale-105"
          />

          {/* Status Badge */}
          <div className="absolute bottom-6 right-6">
            <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
              Available for Work
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;