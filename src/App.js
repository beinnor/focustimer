import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import TopBar from './TopBar';
import Settings from './Settings';

const App = () => {
  const sessionTypes = {
    focus: { name: 'focus', text: 'Focus', minutes: 25 },
    shortBreak: { name: 'shortbreak', text: 'Take a short break', minutes: 5 },
    longBreak: { name: 'longbreak', text: 'Take a long break', minutes: 15 },
  };

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

  const nextSession = () => {
    selectSessionType();
  };
  if (showSettings) {
    return <Settings toggleSettings={toggleSettings} />;
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
