import globalStatusBar from "../../components/ruxGlobalStatusBar/ruxGlobalStatusBar";

import "../../static/css/astro.css";
import "./contact.css";

const astroApp = document.getElementById("astro-app");
// Set theme by Class (dark-theme/light-theme)
astroApp.classList.add("light-theme");

astroApp.insertBefore(globalStatusBar(), astroApp.firstChild);
