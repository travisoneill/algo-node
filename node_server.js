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
if (module === require.main) {
  const server = Server.listen(process.env.PORT || 8001, function () {
    const port = server.address().port;
    console.log('Node Server listening on port %s', port);
  });
}


// // FOR DEV SERVER
// Server.listen( process.env.PORT || 8001, function(){
//   console.log('Server Running');
// });
module.exports = server;
