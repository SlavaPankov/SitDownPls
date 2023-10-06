# SitDownPls

Front-end part of an online furniture store. The project was completed as part of the Web Layout course

## Tech

- Adaptive, cross-browser layout;
- The project uses the **Gulp** builder and the **SASS** preprocessor;
- BEM class naming;
- Swiper.js

## Install

* Clone this repo https://github.com/SlavaPankov/SitDownPls;
* Go to directiory `SitDownPls`;
* Run command `npm i`
* Run one of the follow commands:
  * `npm run dev` - Basic command that runs a development build using browser-sync;
  * `npm run build` - A command for the production build of the project. All assets are compressed and optimized for uploading to hosting;
  * `npm run cache` - A command that should be run after `npm run build`, if you need to upload new files to your hosting without caching;
  * `npm run backend` - A command for the backend build of the project. It is devoid of unnecessary things from the dev build, but is not compressed, for the convenience of the backend;
  * `npm run zip` - A command collects your finished code into a zip archive;

## npm scripts

* `npm run html` - runs the html validator, you need to run it if there are html files in the app folder;
* `npm run code` - runs editorconfig-checker to check compliance with the config file;
