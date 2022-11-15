import React from 'react';

const TopBar = ({ type }) => {
  const focus = () => {
    return (
      <div className="topBar">
        <span className="border">Focus</span>
        <span>Short Break</span>
        <span>Long Break</span>
      </div>
    );
  };

  const short = () => {
    return (
      <div className="topBar">
        <span>Focus</span>
        <span className="border">Short Break</span>
        <span>Long Break</span>
      </div>
    );
  };

  const long = () => {
    return (
      <div className="topBar">
        <span>Focus</span>
        <span className="border">Short Break</span>
        <span>Long Break</span>
      </div>
    );
  };

  switch (type) {
    case 'focus':
      return focus();
    case 'shortbreak':
      return short();
    case 'longbreak':
      return long();

    default:
      return focus();
  }
};

export default TopBar;
