var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact', function(req,res){
  res.render('contact',{ qs : req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('contact-success',{ data : req.body});
});

app.get('/profile/:id', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.id, data: data});
});
app.listen(3000);
