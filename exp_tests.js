var express = require('express');
var app = express();
app.listen(8000);

app.get('/', function (request, response){
    console.log("Hello World");
    // response.send("Hey, hello from the server!");
    response.send({ name: 'John', age: 30 });
});
app.get('/anotherRoute', function (request, response){
    response.send("Hey, I'm another route!");
  });
  app.get('/me', function (request, response){
    response.send({ name: 'An', favouriteFood: "cheesecake", birthdayPresent: "trip to New Zealand"});
  });