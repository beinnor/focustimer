import React, { useState } from 'react';

const Settings = ({ toggleSettings, sessionTypes, updateSettings }) => {
  const [focusTime, setFocusTime] = useState(sessionTypes.focus.minutes);
  const [shortBreakTime, setShortBreakTime] = useState(
    sessionTypes.shortBreak.minutes
  );
  const [longBreakTime, setLongBreakTime] = useState(
    sessionTypes.longBreak.minutes
  );

  const reset = () => {
    setFocusTime(sessionTypes.focus.minutes);
    setShortBreakTime(sessionTypes.shortBreak.minutes);
    setLongBreakTime(sessionTypes.longBreak.minutes);
  };

  const saveSettings = () => {
    updateSettings(focusTime, shortBreakTime, longBreakTime);
    toggleSettings();
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        Focus time:{' '}
        <div>
          <button onClick={() => setFocusTime((focusTime) => focusTime - 1)}>
            -
          </button>
          {focusTime}
          <button onClick={() => setFocusTime((focusTime) => focusTime + 1)}>
            +
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            setShortBreakTime((shortBreakTime) => shortBreakTime - 1)
          }
        >
          -
        </button>
        Short break time:{' '}
        <div>
          <button
            onClick={() =>
              setShortBreakTime((shortBreakTime) => shortBreakTime - 1)
            }
          >
            -
          </button>
          {shortBreakTime}{' '}
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
        Long break time:{' '}
        <div>
          <button
            onClick={() =>
              setLongBreakTime((longBreakTime) => longBreakTime - 1)
            }
          >
            -
          </button>
          {longBreakTime}
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
      <button onClick={saveSettings}>Close Settings</button>
    </div>
  );
};

export default Settings;
