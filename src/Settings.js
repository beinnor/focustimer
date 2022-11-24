import React, { useState } from 'react';
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
    <div className="settingsPage">
      <h1>Settings</h1>
      <div>
        <h2>Focus time:</h2>
        <div>
          <button
            onClick={() => {
              if (focusTime > 1) {
                setFocusTime((focusTime) => focusTime - 1);
              }
            }}
          >
            -
          </button>
          <h2>{focusTime}</h2>
          <button onClick={() => setFocusTime((focusTime) => focusTime + 1)}>
            +
          </button>
        </div>
      </div>
      <div>
        <h2>Short break time:</h2>
        <div>
          <button
            onClick={() => {
              if (shortBreakTime > 1) {
                setShortBreakTime((shortBreakTime) => shortBreakTime - 1);
              }
            }}
          >
            -
          </button>
          <h2>{shortBreakTime}</h2>
          <button
            onClick={() =>
              setShortBreakTime((shortBreakTime) => shortBreakTime + 1)
            }
          >
            +
          </button>
        </div>
      </div>
      <div>
        <h2>Long break time:</h2>
        <div>
          <button
            onClick={() => {
              if (longBreakTime > 1) {
                setLongBreakTime((longBreakTime) => longBreakTime - 1);
              }
            }}
          >
            -
          </button>
          <h2>{longBreakTime}</h2>
          <button
            onClick={() =>
              setLongBreakTime((longBreakTime) => longBreakTime + 1)
            }
          >
            +
          </button>
        </div>
      </div>
      <button onClick={reset}>Defaults</button>
      <button
        onClick={() => updateSettings(focusTime, shortBreakTime, longBreakTime)}
      >
        Save Settings
      </button>
      <button onClick={() => toggleSettings()}>Close Settings</button>
    </div>
  );
};

export default Settings;
