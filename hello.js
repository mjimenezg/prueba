var express = require('express');
var app = express();
var fecha = new Date();

var server = app.listen(3000);

function hello(req,res,next){
  res.write('Hello \n');
  console.log(fecha+"funcion hello");
  next();
}
function bye(req,res,next){
  res.write('Bye \n');
  console.log("funcion bye");
  res.end();
}

app.get('/hello',hello,bye);
