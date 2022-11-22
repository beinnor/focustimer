import React, { useEffect, useState } from 'react';
import Button from 'tiny-ui/lib/button';
import { secsInMmssString } from './Helper';

const Timer = ({ seconds, nextSession }) => {
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [paused, setPaused] = useState(true);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (restart) {
      reset();
    }
  }, [restart]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(intervalId);
  });

  const tick = () => {
    if (paused) return;
    if (secondsLeft === 0) {
      finished();
    } else {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
    }
  };

  const reset = () => {
    setSecondsLeft(seconds);
    setPaused(true);
    setRestart(false);
  };

  const finished = () => {
    setRestart(true);
    nextSession();
  };

  const startHandler = () => {
    setPaused(false);
  };

  const stopHandler = () => {
    setPaused(true);
  };

  const resetHandler = () => {
    reset();
  };

  const startBtnJSX = () => {
    return (
      <Button btnType="primary" onClick={startHandler}>
        Start
      </Button>
    );
  };

  const resetBtnJSX = () => {
    return (
      <Button btnType="danger" onClick={resetHandler}>
        Reset
      </Button>
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
        {paused ? startBtnJSX() : stopBtnJSX()}
        {paused && secondsLeft !== seconds ? resetBtnJSX() : ''}
      </div>
      <h1 className="timeString">{secsInMmssString(secondsLeft)}</h1>
    </>
  );
};

export default Timer;
