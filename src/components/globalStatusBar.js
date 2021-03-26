import RuxGlobalStatusBar from "astro-components/src/components/rux-global-status-bar/rux-global-status-bar";
// import RuxClock from "astro-components/src/components/rux-clock/rux-clock";

const globalStatusBar = () => {
  // Create Status bar element
  const globalStatusBar = document.createElement("rux-global-status-bar");

  // Set Attributes
  // NOTE: For available Attributes see:
  // https://astro-components.netlify.app/?path=/story/components-global-status-bar--global-status-bar
  globalStatusBar.setAttribute("appname", "Astro Starter Kit");
  globalStatusBar.setAttribute("version", "1.0.0");

  // Add Clock to status bar
  //   globalStatusBar.appendChild("rux-clock");

  return globalStatusBar;
};

export default globalStatusBar;
