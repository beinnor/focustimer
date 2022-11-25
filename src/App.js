import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import { Container, Typography, Box } from '@mui/material';

import Timer from './Timer';
import TopBar from './TopBar';
import Settings from './Settings';
import defaultSettings from './defaultSettings';

const App = () => {
  const [sessionTypes, setSessionTypes] = useState(defaultSettings);
  const [shortBreaksCount, setShortBreaksCount] = useState(0);
  const [currentSessionType, setCurrentSessionType] = useState(
    sessionTypes.focus
  );
  const [showSettings, setShowSettings] = useState(false);

  const selectSessionType = () => {
    if (currentSessionType.name === 'focus') {
      if (shortBreaksCount === 3) {
        setCurrentSessionType(sessionTypes.longBreak);
        setShortBreaksCount(0);
      } else {
        setCurrentSessionType(sessionTypes.shortBreak);
        setShortBreaksCount(shortBreaksCount + 1);
      }
    } else if (currentSessionType.name === 'shortbreak') {
      setCurrentSessionType(sessionTypes.focus);
    } else {
      setCurrentSessionType(sessionTypes.focus);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const updateSettings = (focusTime, shortBreakTime, longBreakTime) => {
    let tmp = {
      focus: { name: 'focus', text: 'Focus', minutes: focusTime },
      shortBreak: {
        name: 'shortbreak',
        text: 'Take a short break',
        minutes: shortBreakTime,
      },
      longBreak: {
        name: 'longbreak',
        text: 'Take a long break',
        minutes: longBreakTime,
      },
    };

    setSessionTypes(tmp);
    setCurrentSessionType(tmp[currentSessionType.name]);
  };

  const nextSession = () => {
    selectSessionType();
  };
  if (showSettings) {
    return (
      <Settings
        toggleSettings={toggleSettings}
        sessionTypes={sessionTypes}
        updateSettings={updateSettings}
      />
    );
  } else {
    return (
      <Container maxWidth="sm" height="100vh">
        <Box
          height="100vh"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TopBar type={currentSessionType.name} />

          <Typography variant="h3">{currentSessionType.text}</Typography>

          <Timer
            seconds={currentSessionType.minutes * 60}
            nextSession={nextSession}
          />

          <Button
            variant="outlined"
            onClick={toggleSettings}
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </Box>
      </Container>
    );
  }
};

export default App;
