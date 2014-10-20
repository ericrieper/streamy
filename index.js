var express = require('express'),
    exphbs  = require('express-handlebars');
	router = express.Router();
var fs = require('fs');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*----------- FILES  -----------*/

/*
for (var i in files) {
  console.log('Model Loaded: ' + files[i]);
}
*/

/*----------- STATIC -----------*/

app.use(express.static(__dirname + '/static'));

/*----------- ROUTES -----------*/

router.use(function(req, res, next) {
	console.log("Request: " + req.method, req.url);
	next();	
});


router.get('/', function (req, res) {
	getFiles();
    res.render('home',{files: files});
});


app.use('/', router);

app.listen(37605);


/* ---------- FUNCTIONS --------- */

function getFiles(){

	files = fs.readdirSync(__dirname+'/static/media/');
	var tempFiles = new Array;
	for(var i in files) {
	   if(path.extname(files[i]) === ".mp4") {
	       tempFiles.push(files[i]);
	   }
	}
	files = tempFiles;
}