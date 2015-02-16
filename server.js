var env = process.env.NODE_ENV || 'development';
var express = require('express');
var expressHandlebars = require('express-handlebars');
var routes = require('./routes');
var cachifyStatic = require('connect-cachify-static');
var bootstrapStyl = require('bootstrap-styl');

var stylus;
var nib;
if (env === 'development') {
  stylus = require('stylus');
  nib = require('nib');
}

module.exports = (function () {
  'use strict';

  var server = express();
  server.set('port', process.env.PORT || 3000);

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
          .use(nib())
          .use(bootstrapStyl());
      }
    }));
  }

  server.use(express.static(__dirname + '/public'));

  server.get('/', routes.index);
  server.post('/', routes.index);

  if (!module.parent) { server.listen(server.get('port')); }

  return server;
})();
