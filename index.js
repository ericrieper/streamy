var express = require('express'),
    exphbs  = require('express-handlebars');
	router = express.Router();
var fs = require('fs');
var files = fs.readdirSync(__dirname+'/static/media/');

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
    res.render('home',{files: files});
});

router.get('/item/:id/', function (req, res) {

	var stuff = {title:'A Stack of Floppy Disks', body: '2014, 12"X12"X12", ACRYLIC, SPANDEX, CUSTOM ELECTRONICS, ARDUINO'+req.params.id+''};

    res.render('item',stuff);
    console.log(req.params.id);
});

router.delete('/item/:id/' , function(req,res) {
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		removeItem(db, req.params.id, function(results) {
				res.send('Deleted!');
	        	db.close();
        });
	});
});

app.use('/', router);

app.listen(3000);