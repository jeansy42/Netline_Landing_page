import { motion } from "framer-motion";

function AnimatedButton() {
  return (
    <motion.div
      className="absolute -top-2 -left-2 flex items-center justify-center h-3 w-3 rounded-full bg-blue-900 z-10"
      animate={{
        x: [0, 256, 256, 0, 0],
        y: [0, 0, 40, 40, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 6, // Ajusta la velocidad de rotación
        ease: "linear", // Ajusta la función de ease para una rotación uniforme
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{
          scale: 1.15,
          opacity: 0,
        }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute  h-5 w-5 rounded-full bg-green-700 z-[-1]"
      />
    </motion.div>
  );
}

export default AnimatedButton;
