import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';

const App = () => {
  const sessionTypes = {
    focus: { name: 'focus', minutes: 25 },
    shortBreak: { name: 'shortbreak', minutes: 5 },
    longBreak: { name: 'longbreak', minutes: 15 },
  };

  const [shortBreaksCount, setShortBreaksCount] = useState(0);
  const [currentSessionType, setCurrentSessionType] = useState(
    sessionTypes.focus
  );

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

  const nextSession = () => {
    selectSessionType();
  };

  return (
    <div className="App">
      <h1>Current state: {currentSessionType.name}</h1>
      <h2>Number of short breaks: {shortBreaksCount} / 3</h2>
      <h2>Current time: {currentSessionType.minutes}</h2>
      <button onClick={selectSessionType}>Next state</button>
      <hr />
      <Timer seconds={currentSessionType.minutes} nextSession={nextSession} />
    </div>
  );
};

export default App;
