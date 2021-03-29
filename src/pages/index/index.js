import globalStatusBar from "../../components/ruxGlobalStatusBar/ruxGlobalStatusBar";

import "../../static/css/astro.css";
import "./index.css";

const astroApp = document.getElementById("astro-app");
// Set theme by Class (dark-theme/light-theme)
astroApp.classList.add("dark-theme");

astroApp.insertBefore(globalStatusBar(), astroApp.firstChild);
