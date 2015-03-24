# generator-hackathon

A [Yeoman](http://www.yeoman.io) generator for the [Hack for Equality Hackathon](https://ti.to/hackforequality/hack-for-equality), Dublin, 
March 28th 2015. 

This generator sets up a simple dev environment with Node / [Express](http://expressjs.com/) on the backend & either 
[React.js](http://facebook.github.io/react/) or [jQuery](https://jquery.com/) on the front.

Modules are written in CommonJS format and bundled using [Browserify](http://browserify.org/), and everything comes 
together with [Gulp](http://gulpjs.com/).

In addition, you may optionally include the [Deezer API JavaScript SDK](http://developers.deezer.com/api) if you want to
develop music-based apps using our API (cause that's who I work for! But it isn't installed by default). 

## Getting Started

### Prerequisites 

You need to have

1. A recent version of [Node](http://www.nodejs.org/);
2. I recommend installing the latest version of npm, rather than the one packaged with Node. Run the command `npm update -g npm@latest` 
(you may need to run this command in `sudo`).

### Setting up the generator

1. Install Yeoman & Gulp globally with the command `npm install -g yo gulp` (again, possible in `sudo` mode);
2. To install the hackathon generator, run the command `npm install -g generator-hackathon`.

### Running the generator

Launching the generator is easy

1. Create a directory for your project and cd into it;
2. Run the command `yo hackathon` and follow the prompts.

#### Common problems

Sometimes yeoman can't find your generators, depending on how your environment is setup. If this happens, run the
command `yo doctor` and follow the instructions.

## What the generator installs

A simple Node / Express server, with React.js and/or jQuery on the client.

### Dependencies

Depending on how your respond to Yeoman's queries, the generator will install some or all of the following libraries.
 
1. [Express](http://expressjs.com/)
2. [jQuery](https://jquery.com/)
3. [React.js](http://facebook.github.io/react/)
4. [Twitter Bootstrap CSS] (http://getbootstrap.com)
5. [react-bootstrap](http://react-bootstrap.github.io/)
6. [Browserify](http://browserify.org/)
7. [Gulp](http://gulpjs.com/)
8. [Deezer API JavaScript SDK](http://developers.deezer.com/api)

In addition, we include the following development tools 

- `nodemon` for quick restarting of Express whenever a server-side file is modified;
- `gulp-notify` for desktop notifications when a parse error is encountered by Browserify.

### Project Structure

It also sets up a simple Express project structure that looks like this

- bin *(entry-point to the entire app, launches the server)*  
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

For a client-side app, most of your time will be spent developing in the `src` directory.

## Starting development

After you run the generator, the project will have a `README.md in its root that explains how to get going.

(To summarise it in a line, just run the command `gulp` from your project root and go to http://localhost:3000/ in your browser). 

## TODO 

This generator can be improved in a number of ways. I'm happy to accept PRs for all or any of these!

1. Add Ember to the list of JavaScript libraries (though the generator would have to configure the environment for Ember development
too);
2. Add Sass to the list of CSS languages;
3. Allow a choice between CommonJS + Browserify, AMD + require.js or the Module pattern, or no enforced modules at all.

## Help

If you need help with any of this on the day, ask me on Twitter http://www.twitter.com/cormacflynn or via 
[Slack](https://irishtechcommunity.slack.com/messages/marriage_equality/).

## License

MIT
