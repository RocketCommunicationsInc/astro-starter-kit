// import { RuxGlobalStatusBar } from "/astro/components/rux-global-status-bar/rux-global-status-bar.js";
// import { RuxClock } from "/astro/components/rux-clock/rux-clock.js";

// var astroApp = document.getElementById("astro-app");

// var p = document.createElement("p");
// var text = document.createTextNode("Testing script");
// p.appendChild(text);
// astroApp.appendChild(p);

// // var statusBar = document.createElement("rux-global-status-bar");
// // astroApp.appendChild(statusBar);

const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request for " + req.url + " by method " + req.method);

  if (req.method == "GET") {
    let fileUrl;
    if (req.url == "/") fileUrl = "/index.html";
    else fileUrl = req.url;

    let publicPath = path.resolve("./public" + fileUrl);

    const fileExt = path.extname(publicPath);
    if (fileExt == ".html") {
      fs.exists(publicPath, (exists) => {
        if (!exists) {
          publicPath = path.resolve("./public/404.html");
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(publicPath).pipe(res);
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(publicPath).pipe(res);
      });
    } else if (fileExt == ".css") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      fs.createReadStream(publicPath).pipe(res);
    } else if (fileExt == ".js") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/javascript");
      fs.createReadStream(publicPath).pipe(res);
    } else {
      publicPath = path.resolve("./public/404.html");
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(publicPath).pipe(res);
    }
  } else {
    publicPath = path.resolve("./public/404.html");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(publicPath).pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});