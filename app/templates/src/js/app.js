'use strict';<% if (hasJquery) { %>
var $ = require('jquery');
//
// -- Write your jQuery code here --
//
<% } %><% if (hasReact) { %>
/**
 * An example of a React app entrypoint.
 *
 * @type {exports}
 */
var React = require('react/addons');
var Header = require('./components/Header');

React.render(
  <Header />,
  document.getElementById('header')
);<% } %><% if (hasDeezer && hasJquery) { %>
// An example of accessing the Deezer API on the global DZ object. In reality you'd encapsulate this
// in a component or data store
var query = 'equality';
DZ.api('/search?q=' + encodeURIComponent(query) +'&limit=10', function(res) {
  if (res) {
    var resultsContainer = $('#results');
    var fragment = $('<div />');
    var totalResults = res.data.length;

    $('#song-total').html(totalResults);

    $(res.data).each(function(i, track) {
      fragment.append('<li>' + track.title + ' by ' + track.artist.name + '</li>');
    });
    resultsContainer.append(fragment.html());
  }
});
<% } %><% if (hasDeezer && !hasJquery) { %>
// Access Deezer API on the global DZ object
var query = 'equality';
DZ.api('/search?q=' + encodeURIComponent(query) +'&limit=10', function(res) {
  if (res) {
    var resultsContainer = document.getElementById('results');
    var fragment = document.createDocumentFragment();
    var totalResults = res.data.length;
    var li;

    document.getElementById('song-total').innerText = totalResults;

    for (var i = 0; i < totalResults; i++) {
      track = res.data[i];
      li = document.createElement('li');
      li.innerText = track.title + ' by ' + track.artist.name;
      fragment.appendChild(li);
    }

    resultsContainer.appendChild(fragment.cloneNode(true));
  }
});
<% } %>