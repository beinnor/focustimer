import React, { useEffect, useState } from 'react';
import Button from 'tiny-ui/lib/button';
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

  const startResetBtnJSX = () => {
    return (
      <>
        <Button btnType="primary" onClick={startHandler}>
          Start
        </Button>
        <Button btnType="danger" onClick={resetHandler}>
          Reset
        </Button>
      </>
    );
  };

  const stopBtnJSX = () => {
    return (
      <Button btnType="danger" onClick={stopHandler}>
        Stop
      </Button>
    );
  };

  return (
    <>
      <div className="buttons">
        {!running ? startResetBtnJSX() : stopBtnJSX()}
      </div>
      <h1 className="timeString">{secsInMmssString(secondsLeft)}</h1>
    </>
  );
};

export default Timer;
