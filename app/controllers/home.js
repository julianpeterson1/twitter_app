var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
      res.render('index', {  
        title: 'Twitter',
        data: []
      });
});

router.post('/', function (data, res) {
  var params = {screen_name: data.body.screen_name}
  client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (!error) {
        res.json({ tweets: tweets});
      }
    });
});


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'FJYRINXE1vKoYz5Tdg6of2Yno' ,
  consumer_secret: 'K9a0LNJY9Z4QzaCu0NTPzMTP9sgYvur4c2ZTMYdN6jUpkm80SI' ,
  access_token_key: '53722758-rbX195mGALuoRN8rhFmeqZGNympDGpUBl2A71zbCR',
  access_token_secret: 'WA6iHvGIJWXj3RnQmKU2ZF7IcguczSRde6ilknsSEodJs'
});




