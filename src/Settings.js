import React, { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  Paper,
  Box,
  Divider,
} from '@mui/material';

import defaultSettings from './defaultSettings';

const Settings = ({ toggleSettings, sessionTypes, updateSettings }) => {
  const [focusTime, setFocusTime] = useState(sessionTypes.focus.minutes);
  const [shortBreakTime, setShortBreakTime] = useState(
    sessionTypes.shortBreak.minutes
  );
  const [longBreakTime, setLongBreakTime] = useState(
    sessionTypes.longBreak.minutes
  );

  const reset = () => {
    setFocusTime(defaultSettings.focus.minutes);
    setShortBreakTime(defaultSettings.shortBreak.minutes);
    setLongBreakTime(defaultSettings.longBreak.minutes);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={1}>
        <Box
          height="90vh"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Typography variant="h1" component="h3">
            Settings
          </Typography>

          <Divider sx={{ width: '80%', color: '#000000 ' }} />

          <Typography variant="h4">Focus time:</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (focusTime > 1) {
                  setFocusTime((focusTime) => focusTime - 1);
                }
              }}
            >
              -
            </Button>

            <Typography variant="h4" sx={{ margin: '10px' }}>
              {focusTime}
            </Typography>

            <Button
              variant="contained"
              onClick={() => setFocusTime((focusTime) => focusTime + 1)}
            >
              +
            </Button>
          </Box>
          <Typography variant="h4">Short break time:</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (shortBreakTime > 1) {
                  setShortBreakTime((shortBreakTime) => shortBreakTime - 1);
                }
              }}
            >
              -
            </Button>

            <Typography variant="h4" sx={{ margin: '10px' }}>
              {shortBreakTime}
            </Typography>

            <Button
              variant="contained"
              onClick={() =>
                setShortBreakTime((shortBreakTime) => shortBreakTime + 1)
              }
            >
              +
            </Button>
          </Box>

          <Typography variant="h4">Long break time:</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (longBreakTime > 1) {
                  setLongBreakTime((longBreakTime) => longBreakTime - 1);
                }
              }}
            >
              -
            </Button>

            <Typography variant="h4" sx={{ margin: '10px' }}>
              {longBreakTime}
            </Typography>

            <Button
              variant="contained"
              onClick={() =>
                setLongBreakTime((longBreakTime) => longBreakTime + 1)
              }
            >
              +
            </Button>
          </Box>
          <Divider sx={{ width: '80%', color: '#000000 ' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" onClick={reset} sx={{ margin: '10px' }}>
              Defaults
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                updateSettings(focusTime, shortBreakTime, longBreakTime)
              }
              sx={{ margin: '10px' }}
            >
              Save Settings
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={() => toggleSettings()}
            sx={{ margin: '10px' }}
          >
            Close Settings
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings;
