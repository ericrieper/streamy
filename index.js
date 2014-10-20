var express = require('express'),
    exphbs  = require('express-handlebars');
	router = express.Router();
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

var app = express();

var startArgs = process.argv.slice(2);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*----------- FILES  -----------*/

var files = new Array;

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

// port 37605
app.listen(startArgs[0]);
console.log(chalk.inverse('\n Starting Streamy! on port ' + startArgs[0] + '. \n'));


/* ---------- FUNCTIONS --------- */

function getFiles(){

	files = fs.readdirSync(__dirname+'/static/media/');
	var tempFiles = new Array;
	var tempFile;
	for(var i in files) {
	   if(path.extname(files[i]) === ".mp4") {
	       tempFile = {filename:files[i],type:'mp4'}
	       tempFiles.push(tempFile);
	   }
	   else if (path.extname(files[i]) === ".avi"){
	   		tempFile = {filename:files[i], type:"avi"};
	   		tempFiles.push(tempFile);
	   }
	}
	files = null;
	files = tempFiles;
}









