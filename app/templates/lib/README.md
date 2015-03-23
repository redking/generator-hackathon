This folder contains any modules you want Express to use. In particular, put your custom middleware in the `middleware` 
directory, using it in `app.js` at the root of the project.

Don't forget that middleware should export a function that returns a function. Use the existing middleware as reference.