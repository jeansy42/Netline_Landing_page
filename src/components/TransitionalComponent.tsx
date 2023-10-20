import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MotionSpan from "./MotionSpan";

function TransitionalComponent() {
  const [countComponent, setCountComponent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountComponent((prev) => {
        if (prev === 3) return 1;
        else return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {countComponent == 1 && (
          <MotionSpan text="Ideal para família" img="bg-family" />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {countComponent == 2 && (
          <MotionSpan text="Para todo mundo" img="bg-world" />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {countComponent == 3 && (
          <MotionSpan text="Muita velocidade" img="bg-velocity" />
        )}
      </AnimatePresence>
    </>
  );
}

export default TransitionalComponent;
