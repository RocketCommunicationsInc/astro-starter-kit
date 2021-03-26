import globalStatusBar from "../../components/globalStatusBar";

import "../../static/css/astro.css";

const astroApp = document.getElementById("astro-app");
// Set theme by Class (dark-theme/light-theme)
astroApp.classList.add("dark-theme");

astroApp.appendChild(globalStatusBar());
