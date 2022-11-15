import React, { useEffect, useState } from 'react';
import { secsInMmssString } from './Helper';

const Timer = ({ seconds, nextSession }) => {
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  const startHandler = () => {
    setRunning(true);
  };

  const stopHandler = () => {
    setRunning(false);
  };

  const resetHandler = () => {
    setRunning(false);
    setSecondsLeft(seconds);
    setTimer(null);
  };

  useEffect(() => {
    setSecondsLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (running) {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        if (secondsLeft === 0) {
          clearInterval(timer);
        }
      }
    }, 1000);
    setTimer(timer);
  }, [running]);

  useEffect(() => {
    if (secondsLeft === 0) {
      setRunning(false);
      nextSession();
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className="Timer">
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
      <div>{secsInMmssString(secondsLeft)}</div>
    </div>
  );
};

export default Timer;
