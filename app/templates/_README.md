# <%= appname %>

## Introduction

Node / Express server environment for building web applications.

## Getting Started

1. If you haven't already installed Gulp globally, do so now with the command `sudo npm install -g gulp`;
2. To start developing, run the command `gulp` from the root of this project. Once the server has started up, go to 
http://localhost:3000 in your browser;
3. Tell your IDE to exclude folders `node_modules` and `public` from indexing.

## Included libraries

Depending on how you ran the generator, your project will use one or more of the following libraries

1. [Express](http://expressjs.com/)
2. [jQuery](https://jquery.com/)
3. [React.js](http://facebook.github.io/react/)
4. [Twitter Bootstrap] (http://getbootstrap.com)
5. [react-bootstrap](http://react-bootstrap.github.io/)
6. [Browserify](http://browserify.org/)
7. [Gulp](http://gulpjs.com/)
8. [Deezer API JavaScript SDK](http://developers.deezer.com/api)

All but the Bootstrap CSS and the Deezer API are loaded as `npm` dependencies. Bootstrap is loaded as a `<style>` tag 
in `<head>`; the Deezer API JavaScript SDK is loaded via a simple `<script>` tag before the `<body>` close tag.

In addition, we include the following development tools 

- `nodemon` for quick restarting of Express whenever a server-side file is modified;
- `gulp-notify` for desktop notifications when a parse error is encountered by Browserify.

## Project Structure

Here's a rundown of all the top-level folders:

- bin *(entrypoint to the entire app, launches the server)*  
- lib *(modules used on the server-side)* 
    - middleware *(custom middleware for Express)*
- routes *(Express routes)*
- src *(Client-side code)*
    - css
    - img
    - js
- tasks *(Gulp tasks)*
- views *(Express server-side templates & layouts)*
- app.js *(Express server)*
- Gulpfile.js

In addition, a folder `public` will be created once you launch the server. This acts as the docroot, and contains the
results of running the Gulp build. It shouldn't be directly modified.

## Development

### Developing for the client side

For a single-page app most of your development will take place in the `src` folder. With gulp running, any modifications you 
make to scripts or styles in this folder will provoke a rebuild; you only need to refresh your browser to see the changes.

Client-side JavaScript is written using Node-style CommonJS, and transpiled for the browser by Browserify. This is done
automatically upon server launch and for every change, producing the file `app.js` in `public/js`. If you open the 
default layout at `views/layouts/default.hbs` you'll see this file included as a `<script>` tag at the bottom of the page.

### Adding an external library

External libraries such as jQuery or React are concatenated together by Browserify into the file `vendors.js`, which is 
loaded as a `<script>` tag before your applications `app.js`.

To add another external library as a dependency, do the following:

1. Install the library via npm e.g. `npm install foo --save`;
2. Open the file `tasks/browserify.js` and add the library name to the `vendors` array.

If the library cannot be installed via `npm`, download it and place its files in `src/js/lib`. These will be copied
into `public` during the build process and you can include them in your page template via a `<script>` tag.
 
### Page layouts

The page layout is in `views/layouts/default.hbs` but you can create as many as you need; just pass the variable `layout` 
to render in your Express route; there is an example commented out in `routes/index.js`.

Layouts for individual pages are in the root of the `views` directory, and should be named the same as the route (other 
than `index.hbs` which is the / root). Consult the Express documentation for more info.

### Using the Deezer SDK

If you include the Deezer SDK library, a small snippet of sample code will be inserted into your app.js. It polls the Deezer API for 
10 songs containing the word 'equality' in the title and inserts them into the page.

You can find out more about the API here: http://developers.deezer.com/api

Note that SDKs other than JavaScript are also available on at the above link.

## Help

If you need help with any of this on the day, ask me on Twitter http://www.twitter.com/cormacflynn or via 
[Slack](https://irishtechcommunity.slack.com/messages/marriage_equality/).