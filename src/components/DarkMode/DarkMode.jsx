import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets//Moon.svg?react";

const DarkMode = () => {
  function setModeInLocalStorage(mode ="default") {
    localStorage.setItem("theme", mode);
  }

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setModeInLocalStorage("dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setModeInLocalStorage("light");
  };

  const getUserSavedMode = () => {return localStorage.getItem("theme")};

  if (getUserSavedMode() === "light" ) {
      setLightMode();
    } else {
      setDarkMode();
  }

  const handleToggle = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleToggle}
        defaultChecked={getUserSavedMode() !== 'light'}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
