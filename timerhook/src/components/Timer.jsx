import React from 'react';
import { useTimer } from '../hooks/useTimer';

const Timer = () => {
  const initialTime = 5;
  const { currentTime, setRunning } = useTimer(initialTime);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <div>
      <h2>{currentTime > 0 ? currentTime : 'No Timer Running'}</h2>
      <button onClick={handleStart} disabled={currentTime > 0}>
        Start Timer
      </button>
      <button onClick={handleStop} disabled={currentTime <= 0}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
