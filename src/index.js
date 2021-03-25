import "./test.css";
import "./static/css/astro.css";

const astroApp = document.getElementById("astro-app");
function test() {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Testing script");
  h1.appendChild(text);
  h1.classList.add("hello");

  return h1;
}

astroApp.appendChild(test());
