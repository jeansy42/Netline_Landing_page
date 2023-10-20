import { motion } from "framer-motion";

function MotionSpan({ text, img }: { text: string; img: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
      className="absolute -top-4 left-6 inline-flex flex-col gap-2 items-start text-cusdarkBlue font-bold text-lg sm:left-24 md:left-[48%] md:-top-4 lg:-top-8  "
    >
      {text}
      <span
        className={`flex ${img} bg-top bg-no-repeat bg-cover h-20 w-20 rounded-full self-center lg:h-28 lg:w-28 xl:h-36 xl:w-36`}
      ></span>
    </motion.div>
  );
}

export default MotionSpan;
