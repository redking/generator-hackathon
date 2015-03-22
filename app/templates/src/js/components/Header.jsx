'use strict';
var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

/**
 * Simple Header component
 */
var Header = React.createClass({

  displayName: 'Header',

  mixins: [PureRenderMixin],

  render: function() {

    return (
      <div className="row">
        <div className="col-xs-12">
          <img alt="banner" className="img-responsive" src="img/banner.png" />
        </div>
      </div>
    );
  }

  // -- Private Methods --

  // Private methods go here
});

module.exports = Header;