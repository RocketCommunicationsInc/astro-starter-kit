import globalStatusBar from "../../components/ruxGlobalStatusBar/ruxGlobalStatusBar";

import "../../static/css/astro.min.css";
import "./contact.css";

// Set theme by Class (dark-theme/light-theme)
document.body.classList.add("dark-theme");

const astroApp = document.getElementById("astro-app");

astroApp.insertBefore(globalStatusBar(), astroApp.firstChild);
