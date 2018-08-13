const express = require('express');
// const router = express.Router();
var api = require('./Api');
var app = express();
app.use('/',api);
app.listen(8000);
