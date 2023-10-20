/* import { motion, useAnimate, usePresence } from "framer-motion"; */
import { useEffect, useState } from "react";
function TypeAndDeleteText({ text }: { text: string }) {
  /* const [scope, animate] = useAnimate(); */
  const [addLetter, setAddLetter] = useState("");

  useEffect(() => {
    const sleep = (time: number) =>
      new Promise((resolve) => setTimeout(resolve, time));

    async function animateText() {
      for (let i = 0; i <= text.length; i++) {
        setAddLetter(text.slice(0, i));
        await sleep(50);
      }
      await sleep(3200);

      for (let i = text.length - 1; i >= 0; i--) {
        setAddLetter(text.slice(0, i));
        await sleep(50);
      }
    }

    animateText();
  }, [text]);

  return <span className="absolute -top-6 whitespace-nowrap">{addLetter}</span>;
}
export default TypeAndDeleteText;
