import { RuxGlobalStatusBar } from "@astrouxds/rux-global-status-bar/rux-global-status-bar.js";
import { RuxClock } from "@astrouxds/rux-clock/rux-clock";

import "./ruxGlobalStatusBar.css";

// Example of a reusable component that can be added to any page

const ruxGlobalStatusBar = () => {
  // Create Status bar element
  const ruxGlobalStatusBar = document.createElement("rux-global-status-bar");

  // Set Attributes
  // NOTE: For available Attributes see:
  // https://astro-components.netlify.app/?path=/story/components-global-status-bar--global-status-bar
  ruxGlobalStatusBar.setAttribute("appname", "Astro Starter Kit");
  ruxGlobalStatusBar.setAttribute("version", "1.0.0");

  // Add Clock to status bar
  const ruxClock = document.createElement("rux-clock");
  ruxGlobalStatusBar.appendChild(ruxClock);

  // Add Right Content Parent Div
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("status-bar-section");
  ruxGlobalStatusBar.appendChild(rightContainer);

  return ruxGlobalStatusBar;
};

export default ruxGlobalStatusBar;
