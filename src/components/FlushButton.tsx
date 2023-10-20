import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

function FlushButton() {
  return (
    <a href="#submitBtn">
      <Button className="relative -top-24 flex justify-center items-center w-32 bg-green-700 transform translate-x-[60%] hover:scale-105">
        Clique Aqui
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 1.25,
            opacity: 0,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute  h-10 w-32 rounded-lg bg-green-700 z-[-1]"
        />
      </Button>
    </a>
  );
}

export default FlushButton;
