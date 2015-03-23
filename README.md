# generator-hackathon

A [Yeoman](http://www.yeoman.io) generator for the [Hack for Equality Hackathon](https://ti.to/hackforequality/hack-for-equality), Dublin, 
March 28th 2015. 

This generator sets up a simple dev environment with Node / [Express](http://expressjs.com/) on the backend and either 
[React.js](http://facebook.github.io/react/) or [jQuery](https://jquery.com/) on the front.

Modules are written in CommonJS format and bundled using [Browserify](http://browserify.org/), and everything comes 
together with [Gulp](http://gulpjs.com/).

In addition, you may optionally include the [Deezer API JavaScript SDK](http://developers.deezer.com/api).

## Getting Started

### Prerequisites 

You need to have

1. A recent version of [Node](http://www.nodejs.org/);
2. I recommend installing the latest version of npm, rather than the one packaged with Node. Run the command `sudo npm update -g npm@latest`.

### Setting up the generator

1. Install Yeoman and Gulp globally with the command `sudo npm install -g yo gulp`;
2. To install the hackathon generator, run the command `sudo npm install -g generator-hackathon`.

### Running the generator

Launching the generator is easy

1. Create a directory for your project and cd into it;
2. Run the command `yo hackathon` and follow the prompts.

### Common problems

Sometimes yeoman can't find your generators, depending on how your environment is setup. If this happens, run the
command `yo doctor` and follow the instructions.

## TODO 

This generator can be improved in a number of ways. I'm happy to accept PRs for all or any of these!

1. Allow the user to opt-out of choosing a JavaScript library i.e. add the option 'None';
2. Add Ember to the list of JavaScript libraries. The generator should properly configure its environment for Ember development;
3. Add Sass to the list of CSS languages;
4. Allow the user to choose between Grunt or Gulp. This would require duplicating the same functionality offered
by the Gulp tasks;
5. Allow a choice between CommonJS + Browserify, AMD + require.js or the Module pattern.

## License

MIT
