import { useEffect, useState } from "react";
import MotionSpan from "./MotionSpan";

function TransitionalComponent() {
  const [countComponent, setCountComponent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountComponent((prev) => {
        if (prev === 3) return 1;
        else return prev + 1;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {countComponent == 1 && (
        <MotionSpan text="Ideal para família" img="bg-family" />
      )}
      {countComponent == 2 && (
        <MotionSpan text="Para todo mundo" img="bg-world" />
      )}
      {countComponent == 3 && (
        <MotionSpan text="Muita velocidade" img="bg-velocity" />
      )}
    </>
  );
}

export default TransitionalComponent;
