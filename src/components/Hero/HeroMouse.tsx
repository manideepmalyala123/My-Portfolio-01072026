import { motion } from "framer-motion";

const HeroMouse = () => {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >

      <div className="w-8 h-14 rounded-full border-2 border-primary flex justify-center">
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-2 h-2 bg-primary rounded-full mt-2"
        />
      </div>
    </motion.div>
  );
};

export default HeroMouse;