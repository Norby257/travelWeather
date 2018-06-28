'use strict';

//  dependencies 

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')





const PORT = 3000;
//  configure app 

var app = express();


//  config middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//  server listens here 

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
