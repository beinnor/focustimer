import React, { useEffect, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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

  const startBtnJSX = () => {
    return (
      <Button
        variant="contained"
        onClick={() => setPaused(false)}
        startIcon={<PlayArrowIcon />}
      >
        Start
      </Button>
    );
  };

  const resetBtnJSX = () => {
    if (paused && secondsLeft !== seconds)
      return (
        <Button
          variant="outlined"
          color="error"
          onClick={reset}
          sx={{ marginLeft: '20px' }}
          startIcon={<RestartAltIcon />}
        >
          Reset
        </Button>
      );

    return (
      <Button
        variant="outlined"
        color="error"
        disabled
        sx={{ marginLeft: '20px' }}
        startIcon={<RestartAltIcon />}
      >
        Reset
      </Button>
    );
  };

  const stopBtnJSX = () => {
    return (
      <Button
        variant="outlined"
        onClick={() => setPaused(true)}
        startIcon={<StopIcon />}
      >
        Stop
      </Button>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Box>
        {paused ? startBtnJSX() : stopBtnJSX()}

        {resetBtnJSX()}
      </Box>

      <Typography variant="h1" component="h1" sx={{ margin: '60px' }}>
        {secsInMmssString(secondsLeft)}
      </Typography>
    </Box>
  );
};

export default Timer;
