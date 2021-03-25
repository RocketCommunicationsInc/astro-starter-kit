import "../../test.css";
import "../../static/css/astro.css";
import printMe from "../../print";

function test() {
  // Create container div
  const astroApp = document.createElement("div");
  astroApp.id = "astro-app";

  const h1 = document.createElement("h1");
  const text = document.createTextNode("Testing script");
  const btn = document.createElement("button");

  astroApp.appendChild(h1);
  h1.appendChild(text);
  h1.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  astroApp.appendChild(btn);
  return astroApp;
}

document.body.appendChild(test());
