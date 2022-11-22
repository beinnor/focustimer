import React from 'react';

const Settings = ({ toggleSettings }) => {
  return (
    <div>
      Settings
      <button onClick={toggleSettings}>Close Settings</button>
    </div>
  );
};

export default Settings;
