import { motion } from "framer-motion";
import TypeAndDeleteText from "./TypeAndDeleteText";

function MotionSpan({ text, img }: { text: string; img: string }) {
  return (
    <div className="absolute -top-4 left-6 inline-flex flex-col gap-2 items-start  text-cusdarkBlue font-bold text-lg sm:left-24 md:items-center md:left-[48%] md:-top-4 lg:-top-8  ">
      <TypeAndDeleteText text={text} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <span
          className={`flex ${img} bg-top bg-no-repeat bg-cover h-20 w-20 rounded-full self-center lg:h-28 lg:w-28 xl:h-36 xl:w-36`}
        ></span>
      </motion.div>
    </div>
  );
}

export default MotionSpan;
