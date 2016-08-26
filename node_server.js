'use strict';

const Express = require('express');
const Server = Express();
const Path = require('path');
const Controller = require('./controller');
const BodyParser = require('body-parser');

Server.use(BodyParser.json())

Server.get('/test', function(req, res){
  console.log("Hello.  Node Server is running");
  res.send("Hello.  Node Server is running");
});

Server.post('/api/algos', function(req, res){
  let data = Controller.receiveCode(req.body);
  console.log(data);
  res.send(data);
});

// FOR LIVE SERVER
// Server.listen(process.env.PORT, function(){
//   console.log('Server Running');
// });


// FOR DEV SERVER
Server.listen(8001, function(){
  console.log('Server Running');
});
