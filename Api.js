
var express = require('express');
var router = express();
router.get('/', function (request, response){
    console.log("Hello World");
    response.send({ name: 'John', age: 30 });
});
router.get('/anotherRoute', function (request, response){
    response.send("Hey, I'm another route!");
  });
  router.get('/me', function (request, response){
    response.send({ name: 'An', favouriteFood: "cheesecake", birthdayPresent: "trip to New Zealand"});
  });
module.exports = router;

