import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
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
      <div className="App">
        <TopBar type={currentSessionType.name} />
        <h2 className="titleString">{currentSessionType.text}</h2>
        <Timer
          seconds={currentSessionType.minutes * 60}
          nextSession={nextSession}
        />
        <button onClick={toggleSettings}>&#9881;</button>
      </div>
    );
  }
};

export default App;
