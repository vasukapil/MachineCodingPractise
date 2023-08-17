import { useRef, useEffect, useState } from "react";

export const useTimer = (totalTime) => {
  const [currentTime, setCurrentTime] = useState(totalTime);
  const [running, setRunning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (currentTime <= 0) {
      clearInterval(timerId.current);
    }
  }, [currentTime]);

  useEffect(() => {
    if (running) {
      timerId.current = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timerId.current);
      };
    }
  }, [running]);

  return { currentTime, setRunning };
};
