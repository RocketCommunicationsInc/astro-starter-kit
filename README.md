# Astro HTML/CSS Only Starter Kit

Begin using Astro with this generic kit. This kit starts your project with all of the HTML and CSS needed to begin using the Astro library.

This repository uses Webpack for building an HTML/CSS/JS Application with no front-end framework.

## Setup/Installation

Open a terminal and type commands to

1. Create directory for application
2. Copy/Download files

   ```
   mkdir My-App
   git clone https://github.com/RocketCommunicationsInc/astro-starter-kit.git
   ```

3. Change directory into the project and install dependencies
   **Note: Node.JS and NPM are required.** Can be installed from [this link](https://nodejs.org/en/download/)

   ```
   cd My-App
   npm i
   ```

4. Start Dev Server and Start Coding

   ```
   npm start
   ```

5. When ready for release build a production preview to test and then deloy to your own server

   By default, production code will be created in the dist directory. Simply add the files to your web host.

   - Preview Build - Will run a production build and then start http-server locally on the build files

     ```
     npm run preview
     ```

   - Production Build
     ```
     npm run build
     ```

## Directory Structure

```
Astro Starter-Kit
│   README.md
│   package.json
|   webpack.dev.js
|   webpack.prod.js
|   ...
│
└───src
|   │
|   └───components
|   |   └───ruxGlobalStatusBar
|   |           ruxGlobalStatusBar.js
|   |           ruxGlobalStatusBar.css
|   └───pages
|   |   └───index
|   |   |       index.html
|   |   |       index.css
|   |   |       index.js
|   |   └───contact
|   |           contact.html
|   |           contact.css
|   |           contact.js
|   └───static
|           ...
└───dist
└───node_modules
```

- **_src_** - Directory that houses all of your source code. All source code must reside in this directory
  - components - Houses reusable code to apply to many pages in the application
  - static - Houses all static elements (Base CSS files, icons, fonts, favicon, etc.)
  - pages - Individual pages live here inside their own directory
    - Each page has a base HTML file with corresponding js and css files for styling and effects
- dist - Directory for all production file output
- node_modules - Houses all dependencies. NPM builds this directory automatically when running `npm i`
- package.json - NPM build information for the application
- webpack.dev.js/webpack.prod.js - Tells webpack how to build the application for each environment
  - NOTE: Place to add or modify plugins/tools, as well as a new page for the application. **_See notes in file_**
