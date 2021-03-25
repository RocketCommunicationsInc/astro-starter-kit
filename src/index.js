// const astroApp = document.getElementById("astro-app");
function test() {
  //     const element = document.createElement('div');

  //    // Lodash, currently included via a script, is required for this line to work
  //    // Lodash, now imported by this script
  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //     return element;

  const h1 = document.createElement("h1");
  const text = document.createTextNode("Testing script");
  h1.appendChild(text);
  // astroApp.appendChild(h1);

  return h1;
}

document.body.appendChild(test());
