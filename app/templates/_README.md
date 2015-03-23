# <%= appname %>

## Introduction

Node / Express server environment for building web applications.

## Getting Started

If you haven't already installed Gulp globally, do so now with the command `sudo npm install -g gulp`.

To start developing, run the command `gulp` from the root of this project. Once the server
has started up, go to http://localhost:3000 in your browser.

You should also tell your IDE to ignore folders `node_modules` and `public`.

## Project Structure

For a web application, most of your development will be on the front-end, which is the folder `src`. With gulp running, 
any change you make to scripts or styles in this folder will provoke a rebuild; you only need to refresh to see them 
reflected in your browser.

Here's a rundown of all the top-level folders:

- `bin` Entrypoint for the entire application. Launched by the gulp task, or you can launch the application
yourself with the command `npm start`

- `lib` Libraries used by server-side, in particular custom middleware

- `routes` Express routes

- `src` Client-side code (CSS, JavaScript, React components, images, etc.)

- `tasks` Gulp tasks

- `views` Server-side Handlebars templates for Express

- `public` Generated once the server is launched. Acts as the docroot and shouldn't be directly edited

## Included libraries

Depending on how you ran the generator, your project will use one or more of the following libraries

1. [Express](http://expressjs.com/)
2. [React.js](http://facebook.github.io/react/)
3. [jQuery](https://jquery.com/)
4. [Browserify](http://browserify.org/)
5. [Gulp](http://gulpjs.com/)
6. [Deezer API JavaScript SDK](http://developers.deezer.com/api)

All but the last are loaded as `npm` dependencies. The Deezer API JavaScript SDK is loaded via a simple `<script>` tag.

## Using the Deezer SDK

If you include the Deezer SDK library, a small snippet of sample code will be inserted into your app.js. It polls the Deezer API for 
10 songs containing the word 'equality' in the title and inserts them into the page.

You can find out more about the API here: http://developers.deezer.com/api (or by asking me here http://www.twitter.com/cormacflynn or on Slack).

Note that SDKs other than JavaScript are also available on at the above link.
