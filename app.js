var express = require('express');
var path = require('path');
var debug = require("debug");
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

var Animal = require('./models/animals')

var moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/animalshelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

console.log(1);
var bosco = Animal ({
	name: 'Bosco',
	dob: '08012012',
	gender: 'Male',
	family: 'Thompsons',
	status: 'Adopted'
})

console.log(2);

bosco.save(function(err) {
	if (err) console.log(err);
	console.log('Animal has been created')
})

console.log(3);




app.get('/', function(req, res){
  res.render('index')
})

// app.get('/animals', function(req, res){
// 	res.json(Animal)
// })


// app.post('/animals', function (req, res) {
//   console.log(req.body);
//   var newAnimal = req.body
//   Animals.length >= 1 ? Animals.id = Animals[Animals.length - 1].id + 1  : Animals.id = 0
//   Animals.push(newAnimal)
//   res.json(newAnimal)
// })


// app.delete("/animals/:id", function (req, res) {
//   var animalId = req.params.id
  // finding an object with id = req.body.id out of the animals
//   var item = animals.filter(function(obj) {
//     return obj.id === Number(foodId);
//   })
//   // remove item from array
//   console.log(item);
//   var index = animals.indexOf(item[0])
//   animals.splice(index, 1)
//   // render deleted object
//   res.json(item)
// })

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.listen(3000)