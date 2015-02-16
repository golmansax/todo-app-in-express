var env = process.env.NODE_ENV || 'development';
var express = require('express');
var expressHandlebars = require('express-handlebars');
var routes = require('./routes');
var cachifyStatic = require('connect-cachify-static');

var stylus;
var nib;
if (env === 'development') {
  stylus = require('stylus');
  nib = require('nib');
}

module.exports = (function () {
  'use strict';

  var server = express();

  var hbs = expressHandlebars.create({
    extname: '.hbs'
  });

  server.use(cachifyStatic(__dirname + '/public'));

  server.engine('hbs', hbs.engine);
  server.set('view engine', 'hbs');

  if (env === 'development') {
    server.use(stylus.middleware({
      src: __dirname + '/assets',
      dest: __dirname + '/public/assets',
      compile: function compile(str, path) {
        return stylus(str)
          .set('filename', path)
          .use(nib());
      }
    }));
  }

  server.use(express.static(__dirname + '/public'));

  server.get('/', routes.index);

  if (!module.parent) { server.listen(process.env.PORT || 3000); }

  return server;
})();
