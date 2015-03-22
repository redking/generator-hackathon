'use strict';

/**
 * Setup a location for layouts
 *
 * @returns {layout}
 */
module.exports = function () {
  return function layout(req, res, next) {
    res.locals.layout = 'layouts/default';
    return next();
  };
};