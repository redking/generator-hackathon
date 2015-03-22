'use strict';

var domain = require('domain');
var util = require('util');

/**
 * Encloses each request in a domain, so that unhandled errors can
 * be dealt with correctly. In the case of an unhandled error, we close
 * all requests to the server, then disconnect the cluster (if there is one).
 *
 * @param app
 * @returns {domains}
 */
module.exports = function (app) {

  return function domains(req, res, next) {
    var d = domain.create();

    d.on('error', function (err) {
      try {

        // make sure we close down within 3 seconds
        var killtimer = setTimeout(function () {
          console.error(util.format('Killing process with pid "%s".', process.pid), err);
          process.exit(1);
        }, 30000);

        // But don't keep the process open just for that!
        killtimer.unref();

        // Disconnect the cluster.
        // Uncomment this & require cluster if you setup clustering for production
        //if (cluster.worker) {
          //cluster.worker.disconnect();
        //}
      } catch (err2) {
        // oh well, not much we can do at this point.
        console.error('Error closing server', err2.stack);
      }

      // Invoke the default error handler
      next(err);
    });

    d.run(next);
  };
};
